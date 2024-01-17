/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      },
      colors: {
        "oliveGreen": "#333D2E",
        "lightWhite": "#EFEDE1",
      }
    },
  },

  daisyui: {
    themes: [
        "light",
        "dark",
        "cupcake",
        "retro",
        {
            mytheme: {
                primary: "#FF3811",

                secondary: "#FFFFFF",

                accent: "#2aa4ba",

                neutral: "#1f1a28",

                "base-100": "#ffffff",

                info: "#a4cae5",

                success: "#53ea97",

                warning: "#927c0c",

                error: "#ea7b99",
            },
        },
    ],
},
  plugins: [require("daisyui")],

}
