type LinkProps = {
  children: string;
};

export default function Link({ children }: LinkProps) {
  return (
    <a className="cursor-pointer text-lg text-darkGrayishBlue transition duration-300 hover:text-strongCyan">
      {children}
    </a>
  );
}
