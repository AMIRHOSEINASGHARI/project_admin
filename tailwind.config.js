/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: "#ffedd5",
        lightRose: "#ffe4e6",
        lightPurple: "#ede9fe",
        lightGray: "#f3f4f6",
        lightSlate: "#cbd5e1",
        lightBlue: "#dbeafe",
        lightGreen: "#dcfce7",
        darkOrange: "#c2410c",
        darkRose: "#e11d48",
        darkPurple: "#7c3aed",
        darkGray: "#6b7280",
        darkSlate: "#64748b",
        darkBlue: "#2563eb",
        darkGreen: "#22c55e",
        dark1: "#161c24",
        dark2: "#232b33",
        // base color:
        baseLight: "#d1fae5",
        baseDark: "#10b981",
      },
      padding: {
        box: "25px 20px",
        btn: "5px 15px",
      },
      borderRadius: {
        box: "30px",
        btn: "8px",
      },
      fontSize: {
        base: "16px",
        h1: "30px",
        h2: "25px",
        h3: "20px",
        h4: "17px",
        p1: "14px",
        p2: "12px",
        p3: "10px",
      },
      gap: {
        btn: "8px",
        box: "14px",
      },
    },
  },
  plugins: [],
};
