/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: theme => ({
          'hero-pattern': "url('/img/hero-pattern.svg')",
          'space': "url('/src/assets/images/space.jpg')",
          'brick-wall':"url('/src/assets/images/brickwall.jpg')",
          'PCScene':"url('/src/assets/images/PCScene.png')",
          'PCSceneFlip':"url('/src/assets/images/PCSceneFlip.png')",
          'PCScene2':"url('src/assets/images/PCScene2.png')",
          'TarascoLogo':"url('../assets/images/TarascoLogo.jpg')",
          'SafiLog':"url('../assets/images/Safilog.PNG')"
        }),

        colors: {
          gray: {
            200: "#D5DAE1"
          },
          black: {
            DEFAULT: "#000",
            500: "#1D2235"
          },
          blue: {
            500: "#2b77e7"
          }
        },
        fontFamily: {
          worksans: ["Work Sans", "sans-serif"],
          poppins: ['Poppins', "sans-serif"]
        },
        boxShadow: {
          card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
        }
      },
    },
    plugins: [],
  }