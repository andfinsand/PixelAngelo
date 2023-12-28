import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      wide: '.025em',
      customSpacing: '.35em',
    },
    extend: {
      colors: {
        bgColor: "#383838",
        dividerColor: "#282828",
        footerColor: "#8B8B8B"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
