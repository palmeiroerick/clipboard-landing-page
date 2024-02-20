type ButtonProps = {
  type: "iOS" | "Mac";
};

export default function Button({ type }: ButtonProps) {
  return <button>Download for {type}</button>;
}
