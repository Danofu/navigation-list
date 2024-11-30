import Link, { LinkStatus } from '@/entities/Link/model/Link';

type LinkState = {
  links: Array<Link & {
    order: number | null;
    status?: LinkStatus;
    subLink?: LinkState['links'][number];
  }>;
};

export { type LinkState };
