export enum Variant {
  Success,
  Info,
  Warning,
  Error,
};

export type SnackbarType = {
  key: string;
  text: React.ReactNode;
  icon?: React.FunctionComponent<React.SVGProps<SVGElement>>;
}

export type TSnackbarProps = Omit<SnackbarType, 'key'> & {
  handleClose: () => void;
  open: boolean;
  variant: Variant;
}
