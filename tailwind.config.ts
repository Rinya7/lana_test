import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        urbanist: ['"Urbanist"', "sans-serif"],
        wallpoet: ['"Wallpoet"', "sans-serif"],
        sarpanch: ['"Sarpanch"', "sans-serif"],
        zenDots: ['"Zen Dots"', "sans-serif"],
        smoochSans: ['"Smooch Sans"', "sans-serif"],
      },
      colors: {
        primary: "#5ae4aa",
        hover: { 100: "#4fd998", 90: "#8df7c8" },
        light: "#f7f7f7",
        blue: "#1700ff",
        red: {
          10: "#F00",
          90: "#fa0303",
        },
        dark: {
          100: "#000000",
          90: "#242424",
          80: "#1F1F1F",
        },
        white: "#ffffff",
        green: "#1b8b1b",
        gray: {
          100: "#d1d1d1",
          90: "#989696",
          80: "#7e7e7e",
          70: "#919191",
          60: "#dee0ea",
          20: "#F3F3F3",
          10: "#ededed",
        },
      },
      fontSize: {
        logo: ["23px", "113%"],
        btn: ["14px", "2"],
        btnError: ["13px", "1.2"],
        form: ["13px", "1.7"],
        cart: ["10px", "2.6"],
        m: ["12px", "1.6"],
        sm: ["15px", "1.5"],
        smm: ["16px", "1.6"],
        ssm: ["18px", "1.5"],
        l: ["20px", "1.6"],
        xl: ["25px", "1.4"],
        xm: ["30px", "1.4"],
        xxl: ["35px", "1.2"],
        xxxl: ["35px", "1.5"],
        hm: ["40px", "1.4"],
        hhm: ["45px", "1.4"],
        hhhm: ["48px", "1.4"],
        xxm: ["60px", "1.5"],
        xxxm: ["60px", "1.2"],
        g: ["75px", "1.2"],
      },

      lineHeight: {
        logo: "113%",
      },
      backgroundImage: {
        "hero-bcg": "url('/img/hero_bcg.png')",
        "particularity-bcg": "url('/img/particularity_bcg.png')",
        "installation-bg": "url('/img/installation/guard.png')",
        "case-bcg": "url('/img/case_bcg_70.png')",
        "constructor-bcg": "url('/img/constructor/starterKit.png')",
      },
      backgroundPosition: {
        my: "calc(50%-180px) center",
      },
      screens: {
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1920px",
      },
      maxWidth: {
        "10xl": "1685px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      borderWidth: {
        DEFAULT: "0px",
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
    },
  },
  plugins: [],
};
export default config;
