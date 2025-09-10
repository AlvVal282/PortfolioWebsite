'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// project imports
import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

interface ProviderWrapperProps {
  children: ReactNode;
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <ThemeCustomization>
      <Locales>
        <ScrollTop>
          <SessionProvider refetchInterval={0}>
            <Notistack>
              <Snackbar />
              {children}
            </Notistack>
          </SessionProvider>
        </ScrollTop>
      </Locales>
    </ThemeCustomization>
  );
}
