'use client';

import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface GuestGuardProps {
  children: ReactElement;
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'authenticated') return null;

  return children;
}
