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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navBar: "#182849",
        page: "#D9CCC8",
        card: "#F0E7E4",
        "card-hover": "",
        "default-text-dark": "##777777",
        "text-dark-hover-selected": "#3FA6A6",
        "default-text-light": "#ECE4E3",
        "text-light-hover": "#ffffff",
        "text-light-selected": "#2F96B8",
        paragraph: "#66615B",
        "title-section": "#777777",
        "title-card": "#2F96B8",
        "blue-accent": "	#3FA6A6", //buttons
        "blue-accent-hover": "", //buttons-hover
        "no-started": "#f44336",
        started: "	#c19737",
        done: "#43a86f",
      },
    },
  },
  plugins: [],
};
export default config;
