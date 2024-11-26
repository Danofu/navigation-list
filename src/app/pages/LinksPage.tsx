'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from '@/app/providers/StoreProvider';

function LinksPage(): React.ReactElement | null {
  const router = useRouter();
  const empty = useStore(useShallow(({ links }) => links.length === 0));

  useEffect(() => {
    if (empty) {
      router.replace('/links/empty');
    }
  }, [empty, router]);

  return null;
}

export default LinksPage;
