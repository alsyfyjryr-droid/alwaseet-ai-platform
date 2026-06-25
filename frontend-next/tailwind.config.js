/** @type {import('tailwindcss').Config} /
module.exports = {
content: [
"./app/**/.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}"
],
theme: {
extend: {
colors: {
primary: "#D4AF37",
dark: "#0F172A"
}
}
},
plugins: []
}
