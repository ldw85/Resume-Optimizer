// Explicitly import the PostCSS plugin from the separate package
import tailwindcssPostcss from '@tailwindcss/postcss'; 
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    // Use the imported plugin directly
    tailwindcssPostcss, 
    autoprefixer,
  ],
};
