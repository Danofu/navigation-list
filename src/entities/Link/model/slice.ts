import Link, { LinkStatus } from '@/entities/Link/model/Link';

type LinkState = {
  links: Array<Link & { status?: LinkStatus }>;
};

export { type LinkState };
