import { array, lazy, nativeEnum, number, object, string } from 'zod';

import { LinkStatus } from '@/entities/Link/model/Link';
import { LinkState } from '@/entities/Link/model/slice';
import { Decoder } from '@/shared/lib/utility-types';

type Link = LinkState['links'][number];

const linkDecoder = (): Decoder<Link> => object({
  id: string().uuid(),
  label: string().min(1),
  order: number().nullable(),
  status: nativeEnum(LinkStatus).optional(),
  subLink: lazy(() => linkDecoder().optional()),
  url: string().optional(),
});
export const linksDecoder = (): Decoder<Array<Link>> => array(linkDecoder());
