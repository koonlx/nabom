import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/app/**/*.{html,js,ts,jsx,tsx,mdx}',
      './src/widgets/**/*.{html,js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'media',
   theme: {
      extend: {
         colors: {
            primary: 'var(--primary-color)',
            foreground: 'var(--foreground)',
            background: 'var(--background)',
            secondary: 'var(--secondary-color)',
         },
         boxShadow: {
            'footer': '-6px -5px 60px 4px rgba(0, 0, 0, 0.3)',
            'footer-dark': '-6px -5px 60px 4px rgba(255, 255, 255, 0.1)',
            'header': '6px 5px 60px 4px rgba(0, 0, 0, 0.3)',
            'header-dark': '6px 5px 60px 4px rgba(255, 255, 255, 0.1)',
         },
      },
   },
   plugins: [],
};

export default config;
