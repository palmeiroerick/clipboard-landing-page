type LinkProps = {
  children: string;
};

export default function Link({ children }: LinkProps) {
  return <a>{children}</a>;
}
