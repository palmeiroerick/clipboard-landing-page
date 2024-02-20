type TitleProps = {
  as: "h1" | "h2" | "h3";
  className?: string;
  children: string;
};

export default function Title({ as, className, children }: TitleProps) {
  const Tag = as;

  return <Tag className={`${className}`}>{children}</Tag>;
}
