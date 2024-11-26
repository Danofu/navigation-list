import { StateCreator } from 'zustand';

import Link from '@/entities/Link/model/Link';

type LinkState = {
  links: Array<Link>;
};

type LinkStore = LinkState;

const createLinkSlice: StateCreator<LinkStore, [], [], LinkStore> = () => ({
  links: [],
});

export { type LinkState, type LinkStore };
export default createLinkSlice;
