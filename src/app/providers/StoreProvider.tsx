'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { StoreApi, useStore } from 'zustand';

import createRootStore, { RootStore } from '@/app/store';
import { linksDecoder } from '@/entities/Link';

type RootStoreApi = StoreApi<RootStore>;
const StoreContext = createContext<RootStoreApi | undefined>(undefined);

type Props = Readonly<{
  children: React.ReactNode;
}>;

function StoreProvider({ children }: Props): React.ReactElement {
  const [store, setStore] = useState<RootStoreApi>(createRootStore());

  useEffect(() => {
    const rawLinks = localStorage.getItem('links') || 'null';
    const { data: links = [] } = linksDecoder().safeParse(JSON.parse(rawLinks));
    setStore(createRootStore({ links }));
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

const useRootStore = <T,>(selector: (store: RootStore) => T): T => {
  const storeCtx = useContext(StoreContext);
  if (!storeCtx) {
    throw new Error('useStore must be use within StoreProvider');
  }
  return useStore(storeCtx, selector);
};

export { useRootStore as useStore };
export default StoreProvider;
