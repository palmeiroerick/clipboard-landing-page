import Image from "next/image";

type LogoProps = {
  size: "sm" | "lg";
};

export default function Logo({ size }: LogoProps) {
  const variants = size === "sm" ? "h-16 w-16" : "h-32 w-32";

  return (
    <div className={`${variants} relative`}>
      <Image className="object-contain" src="/logo.svg" alt="logo" fill />
    </div>
  );
}
