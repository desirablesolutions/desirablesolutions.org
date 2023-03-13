/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"humble-beginnings": "url('assets/images/cover.jpg')",
			},
			fonts: {
				serif: "The Seasons, serif"
			}
		},
	},
	plugins: [],
}
