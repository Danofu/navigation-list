interface Link {
  id: string;
  label: string;
  url?: string | undefined;
  subLink?: Link | undefined;
}

export default Link;
