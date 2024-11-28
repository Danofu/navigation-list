import { createStore } from 'zustand/vanilla';

import { LinkState } from '@/entities/Link';
import { createLinkActions, LinkActions } from '@/features/Link';

type RootState = LinkState;
type RootStore = RootState & LinkActions;

const defaultInitState: RootState = {
  links: [],
};

const createRootStore = (initState = defaultInitState) => (
  createStore<RootStore>()((...args) => ({
    ...createLinkActions(...args),
    ...initState,
  }))
);

export { type RootStore };
export default createRootStore;
