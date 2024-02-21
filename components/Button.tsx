type ButtonProps = {
  type: "iOS" | "Mac";
};

export default function Button({ type }: ButtonProps) {
  const variants = {
    iOS: "bg-strongCyan",
    Mac: "bg-darkGrayishBlue",
  };

  return (
    <button
      className={`${variants[type]} h-12 w-80 rounded-full text-lg font-semibold text-[#fff]`}
    >
      Download for {type}
    </button>
  );
}
