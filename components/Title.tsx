type TitleProps = {
  as: "h1" | "h2" | "h3";
  className?: string;
  children: string;
};

export default function Title({ as, className, children }: TitleProps) {
  const Tag = as;

  const variants = {
    h1: "text-[32px] lg:text-5xl",
    h2: "text-3xl lg:text-4xl",
    h3: "text-2xl lg:text-3xl",
  };

  return (
    <Tag
      className={`${className} ${variants[as]} text-center font-semibold text-darkGrayishBlue`}
    >
      {children}
    </Tag>
  );
}
