export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#B6A05D",
        primaryDark: "#8F7E48",
        secondary: "#D3B75D",
        'custom-brown-light': '#B6A05D',// 漸變結束色
        'custom-brown-dark': '#8F7E48', // 新增的漸變起始顏色
      },
      width: {
        '1/10': '10%',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    
  ],
};