import GuestGuard from 'utils/route-guard/GuestGuard';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <GuestGuard>{children}</GuestGuard>;
}
