'use client';

import { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';
import type { Options as OptionsOfCreateCache } from '@emotion/cache';

export type NextAppDirEmotionCacheProviderProps = {
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>;
  CacheProvider?: typeof DefaultCacheProvider;
  children: ReactNode;
};

export function NextAppDirEmotionCacheProvider({
  options,
  CacheProvider = DefaultCacheProvider,
  children
}: NextAppDirEmotionCacheProviderProps) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: { name: string; isGlobal: boolean }[] = [];
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector
        });
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    let dataEmotionAttribute = cache.key;

    const globals: {
      name: string;
      style: string;
    }[] = [];

    names.forEach(({ name, isGlobal }) => {
      const style = cache.inserted[name] || '';

      if (typeof style !== 'boolean') {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    });

    return (
      <>
        {globals.map(({ name, style }) => (
          <style key={name} data-emotion={`${cache.key}-global ${name}`} dangerouslySetInnerHTML={{ __html: style }} />
        ))}
        {styles && <style data-emotion={dataEmotionAttribute} dangerouslySetInnerHTML={{ __html: styles }} />}
      </>
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}