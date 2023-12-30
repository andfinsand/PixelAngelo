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
        bgColorFrom: "#383838",
        bgColorTo: "#3A3A3A",
        dividerColor: "#282828",
        dottedColor: "#8E8E8E",
        fileTypeContainer: "#696969",
        footerColor: "#8B8B8B",
        grayFont: "#B8B8B8",
        logoPink: "#db36a4",
        logoYellow: "#FFD303",
        dropZoneColor: "#4E4E4E"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
      },
      height: {
        '400': '400px',
      },
      width: {
        '600': '600px',
      },
    },
  },
  plugins: [],
}
export default config
