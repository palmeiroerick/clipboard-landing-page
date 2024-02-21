type TextProps = {
  children: string;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return (
    <p
      className={`${className} text-center text-[17px] text-grayishBlue lg:text-[22px]`}
    >
      {children}
    </p>
  );
}
