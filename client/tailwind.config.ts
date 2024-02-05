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
      customSpacing: '.31em',
    },
    screens: {
      'sm': '520px',
      'md': '720px',
    },
    extend: {
      boxShadow: {
        'customShadow': 'rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 3px 6px',
      },
      colors: {
        bgColorFrom: '#2E2E2E',
        bgColorTo: '#292929',
        dividerColor: '#1D1D1D',
        dottedColor: '#949494',
        dropZoneColorFrom: '#444444',
        dropZoneColorTo: '#404040',
        fileTypeContainer: '#5B5B5B',
        footerColor: '#8B8B8B',
        grayFont: '#C3C3C3',
        logoPink: '#db36a4',
        logoYellow: '#FFD303',
      },
      fontFamily: {
        poppinsLight: ['PoppinsLight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsSemiBold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
