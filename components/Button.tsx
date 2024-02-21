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
      className={`${variants[type]} h-12 w-80 rounded-full text-lg font-semibold text-[#fff] transition duration-300 hover:opacity-70 lg:w-56`}
    >
      Download for {type}
    </button>
  );
}
