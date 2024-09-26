import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "colors": {
        "black1": "#000000",
        "black2": "#121212",
        "black3": "#2A2A2A",
        "white2": '#F0F0F0',
        'gray2': '#333333',
        "spotify-green": "#1DB954",
        "spotify-black": "#191414",
      },
    },
  },
  plugins: [],
};
export default config;
