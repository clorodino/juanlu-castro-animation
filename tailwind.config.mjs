/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "trangray(0, 100%)",
          },
          "100%": {
            transform: "trangray(0, 0)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
