module.exports = {
  content: ["./src/**/*.tsx"],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFFFFF',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#312b5f',
          400: '#313b9f',
          500: '#2a6e3c',
          600: '#3a8e5c',
          700: '#88c2ce'

        }
      },
      borderRadius: {
        md: '4px'
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")
  ],
  purge: [
    "./public/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
}
