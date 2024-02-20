import Image from "next/image";

type CompanyProps = {
  company: "google" | "ibm" | "microsoft" | "hp" | "vector-graphics";
};

export default function Company({ company }: CompanyProps) {
  const src = {
    google: "/logo-google.png",
    ibm: "/logo-ibm.png",
    microsoft: "/logo-microsoft.png",
    hp: "/logo-hp.png",
    "vector-graphics": "/logo-vector-graphics.png",
  };

  const variants = {
    google: "w-[150px] h-[45px]",
    ibm: "w-[125px] h-[50px]",
    microsoft: "w-[145px] h-[40px]",
    hp: "w-[125px] h-[60px]",
    "vector-graphics": "w-[120px] h-[35px]",
  };

  return (
    <div className={`${variants[company]} relative`}>
      <Image className="object-contain" src={src[company]} alt={company} fill />
    </div>
  );
}
