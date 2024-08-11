/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        libre: ["var(--font-libre-baskerville)", "serif"],
      },
      colors: {
        "brand-beige-00": "#fefefb",
        "brand-beige-10": "#f7f6e8",
        "brand-turquoise-00": "#e6fafe",
        "brand-turquoise-20": "#b4f1fd",
        "brand-turquoise-50": "#69e3fc",
        "brand-yellow-40": "#ffea80",
        "brand-yellow-100": "#e5c000",
        "brand-orange-70": "#ff7733",
        "grey-00": "#ffffff",
        "grey-20": "#cccccc",
        "grey-40": "#999999",
        "grey-60": "#666666",
        "grey-80": "#333333",
        "grey-100": "#000000",
      },
    },
  },
  plugins: [],
};
