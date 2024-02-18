import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      strongCyan: "hsl(171, 66%, 44%)",
      lightBlue: "hsl(233, 100%, 69%)",
      darkGrayishBlue: "hsl(210, 10%, 33%)",
      grayishBlue: "hsl(201, 11%, 66%)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
    },
    backgroundImage: {
      headerMobile: "url('/bg-header-mobile.png')",
      headerDesktop: "url('/bg-header-desktop.png')",
    },
  },
};

export default config;
