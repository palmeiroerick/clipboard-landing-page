import Image from "next/image";

type IconProps = {
  icon: "blacklist" | "text" | "preview";
};

export default function Icon({ icon }: IconProps) {
  const src = {
    blacklist: "/icon-blacklist.svg",
    text: "/icon-text.svg",
    preview: "/icon-preview.svg",
  };

  return <Image src={src[icon]} alt={`${icon} icon`} width={44} height={40} />;
}
