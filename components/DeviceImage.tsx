import Image from "next/image";

type DeviceImageProps = {
  src: "/image-computer.png" | "/image-devices.png";
  className?: string;
};

export default function DeviceImage({ src, className }: DeviceImageProps) {
  return (
    <div
      className={`${className} relative h-[243.33px] w-80 lg:h-[486.66px] lg:w-[640px]`}
    >
      <Image className="object-contain" src={src} alt="device image" fill />
    </div>
  );
}
