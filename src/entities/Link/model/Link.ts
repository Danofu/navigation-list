interface Link {
  id: string;
  label: string;
  url?: string | undefined;
}

enum LinkStatus {
  ADDING_SUB_LINK = 'ADDING_SUB_LINK',
  EDITING = 'EDITING',
}

export { LinkStatus };
export default Link;
