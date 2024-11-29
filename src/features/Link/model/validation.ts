import { literal, object, string } from 'zod';

import { Decoder } from '@/shared/lib/utility-types';

export type LinkFormValues = {
  name: string;
  url: string;
};
export const linkFormSchema: Decoder<LinkFormValues> = object({
  name: string().min(1, 'Nazwa jest wymagana'),
  url: string().url('Link nieprawidłowy').or(literal('')),
});
