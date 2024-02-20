import Image from "next/image";

type SocialIconProps = {
  icon: "facebook" | "twitter" | "instagram";
};

export default function SocialIcon({ icon }: SocialIconProps) {
  const src = {
    facebook: "/icon-facebook.svg",
    twitter: "/icon-twitter.svg",
    instagram: "/icon-instagram.svg",
  };

  return <Image src={src[icon]} alt={`${icon} icon`} width={24} height={24} />;
}
