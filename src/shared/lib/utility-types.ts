import { ZodType, ZodTypeDef } from 'zod';

export type Decoder<I, O = I> = ZodType<O, ZodTypeDef, I>;
