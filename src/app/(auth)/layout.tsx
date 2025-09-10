'use client';

import GuestGuard from 'utils/route-guard/GuestGuard';
import { ReactNode, ReactElement } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return <GuestGuard>{<>{children}</>}</GuestGuard>;
}
