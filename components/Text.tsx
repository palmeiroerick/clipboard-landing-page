type TextProps = {
  children: string;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return <p className={`${className} text-center text-grayishBlue text-[17px]`}>{children}</p>;
}
