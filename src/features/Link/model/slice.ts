import { v4 as uuid } from 'uuid';
import { StateCreator } from 'zustand/index';

import { Link, LinkState } from '@/entities/Link';

type LinkActions = {
  addLink: (label: string, url?: string, parentId?: string) => void;
};

const createLinkActions: StateCreator<LinkState & LinkActions, [], [], LinkActions> = (set) => ({
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

export { type LinkActions };
export default createLinkActions;
