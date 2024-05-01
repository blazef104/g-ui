/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#07C',
        'accent': '#f77777',
        'success': '#00BFB3',
        'warning': '#FEC514',
        'danger': '#BD271E',
        'gray': '#d6d4d9'
      },
    }

  },
  plugins: [],
}

