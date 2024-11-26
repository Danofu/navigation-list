import { createStore } from 'zustand/vanilla';

import { createLinkSlice, LinkState, LinkStore } from '@/entities/Link';

type RootState = LinkState;
type RootStore = LinkStore;

const defaultInitState: RootState = {
  links: [],
};

const createRootStore = (initState = defaultInitState) => (
  createStore<RootStore>()((...args) => ({
    ...createLinkSlice(...args),
    ...initState,
  }))
);

export { type RootStore };
export default createRootStore;
