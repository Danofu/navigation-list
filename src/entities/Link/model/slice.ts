import { v4 as uuid } from 'uuid';
import { StateCreator } from 'zustand';

import Link from '@/entities/Link/model/Link';

type LinkState = {
  links: Array<Link>;
};

type LinkActions = {
  addLink: (label: string, url?: string, parentId?: string) => void;
};

type LinkStore = LinkState & LinkActions;

const createLinkSlice: StateCreator<LinkStore, [], [], LinkStore> = (set) => ({
  links: [],
  addLink: (label: string, url?: string, parentId?: string) => set((state) => {
    const createNewLink = (subLink?: Link): Link => ({ id: uuid(), label, subLink, url });
    if (!parentId) {
      const updatedLinks = [...state.links, createNewLink()];
      localStorage.setItem('links', JSON.stringify(updatedLinks));
      return { links: updatedLinks };
    }

    const recursivelyAddLink = (links: Array<Link>): Array<Link> => links.map((link) => {
      if (link.id === parentId) {
        return { ...link, subLink: createNewLink(link.subLink) };
      }
      if (link.subLink) {
        return { ...link, subLink: recursivelyAddLink([link.subLink])[0] };
      }
      return link;
    });

    const updatedLinks = recursivelyAddLink(state.links);
    localStorage.setItem('links', JSON.stringify(updatedLinks));

    return { links: updatedLinks };
  }),
});

export { type LinkState, type LinkStore };
export default createLinkSlice;
