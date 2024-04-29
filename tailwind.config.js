/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3c95e8',
        'accent': '#f77777',
        'success': '#00BFB3',
        'warning': '#FEC514',
        'danger': '#e84848',
        'gray': '#d6d4d9'
      },
    }

  },
  plugins: [],
}

