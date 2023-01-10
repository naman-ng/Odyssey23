/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: "#88D2E2",
      orange: "#F26923",
      magenta: "#EE2D69",
      blue: "#1C1E56",
      yellow: "#FFAE01",
    },
    extend: {
      backgroundImage: {
        clouds: "url('/clouds.svg')",
        skyline: "url('/images/skyline.png')",
        building: "url('/images/rnd+oldacad.webp')",
        ground: "url('/images/trees+road+ground.webp')",
        road: "url('/road.svg')",
        truck: "url('/truck.svg')",
        stalls: "url('/stalls.svg')",
        contactFormTop: "url('/contactFormTop.svg')",
        LayerBottomContact: "url('/contactFormLayerBottom.svg')",
        contactFormBg: "url('/contactFormBg.svg')",
        odessey_truck_form: "url('/images/odessey_truck_form.svg')",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      screens: {
        small: {
          max: "800px",
        },
        sm: "300px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
