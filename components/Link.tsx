type LinkProps = {
  children: string;
};

export default function Link({ children }: LinkProps) {
  return <a className="text-lg text-darkGrayishBlue">{children}</a>;
}
