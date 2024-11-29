import { array, lazy, object, string } from 'zod';

import Link from '@/entities/Link/model/Link';
import { Decoder } from '@/shared/lib/utility-types';

const linkDecoder = (): Decoder<Link> => object({
  id: string().uuid(),
  label: string().min(1),
  url: string().optional(),
  subUrl: lazy(() => linkDecoder().optional()),
});
export const linksDecoder = (): Decoder<Array<Link>> => array(linkDecoder());
