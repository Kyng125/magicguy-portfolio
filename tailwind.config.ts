import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redViolet: '#C71586',
        electricPurple: '#C000FF',
        indigoPurple: '#4C0082',
        pink1: '#FB3A89',
        pink2: '#D85490',
        amber: '#FFF8E1',
        weirdWhite: '#E3D3D3',
        vividMagenta: '#FF0090',
        neonGreen: '#39FF14',
        deepBlack: '#000000',
        electricBlue: '#00D4FF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
