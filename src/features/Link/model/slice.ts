import { v4 as uuid } from 'uuid';
import { StateCreator } from 'zustand/index';

import { linksDecoder, LinkState } from '@/entities/Link';

type Link = LinkState['links'][number];

type LinkActions = {
  addLink: (label: string, url?: string, parentId?: string) => void;
  updateLink: (id: string, updater: (link: Link) => Link) => void;
  deleteLink: (id: string) => void;
};

const createLinkActions: StateCreator<LinkState & LinkActions, [], [], LinkActions> = (set) => ({
  addLink: (label, url, parentId) => set((state) => {
    const createNewLink = (order: number | null, subLink?: Link): Link => ({ id: uuid(), label, subLink, url, order });
    if (!parentId) {
      const updatedLinks = [...state.links, createNewLink(state.links.length)];
      localStorage.setItem('links', JSON.stringify(updatedLinks));
      return { links: updatedLinks };
    }

    const recursivelyAddLink = (links: Array<Link>): Array<Link> => links.map((link) => {
      if (link.id === parentId) {
        return { ...link, subLink: createNewLink(null, link.subLink) };
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
  updateLink: (id, updater) => set((state) => {
    const recursivelyUpdateLink = (links: Array<Link>): Array<Link> => links.map((link) => {
      if (link.id === id) {
        return updater(link);
      }
      if (link.subLink) {
        return { ...link, subLink: recursivelyUpdateLink([link.subLink])[0] };
      }
      return link;
    });

    const updatedLinks = recursivelyUpdateLink(state.links);
    localStorage.setItem('links', JSON.stringify(updatedLinks));

    return { links: updatedLinks };
  }),
  deleteLink: (id) => set((state) => {
    const recursivelyDeleteLink = (links: Array<Link>): Array<Link | undefined> => (
      links
        .map((link) => {
          if (link.id === id) {
            return link.subLink;
          }
          if (link.subLink) {
            return { ...link, subLink: recursivelyDeleteLink([link.subLink])[0] };
          }
          return link;
        })
        .filter(Boolean)
    );

    const updatedLinks = recursivelyDeleteLink(state.links);
    const { data: parsedLinks, success } = linksDecoder().safeParse(updatedLinks);
    if (!success) {
      return {};
    }

    localStorage.setItem('links', JSON.stringify(parsedLinks));

    return { links: parsedLinks };
  }),
});

export { type LinkActions };
export default createLinkActions;
