import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: Array<ClassValue>): string => twMerge(clsx(classes));
