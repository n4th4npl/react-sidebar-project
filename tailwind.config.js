/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/**/*.html',    // HTML files in the src directory
      './src/**/*.jsx',     // JSX files in the src directory
      './views/**/*.php',   // PHP Blade templates in the views directory
      './templates/**/*.hbs' // Handlebars templates in the templates directory
    ],
    // ...
  },
  // ...
}
