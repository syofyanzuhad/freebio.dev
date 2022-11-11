/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			boxShadow: {
				"link-s":
					"inset 0px 17.7895px 25.5438px -16.421px rgb(255 255 255 / 50%), inset 0px -5.92982px 4.10526px -6.38596px rgb(255 255 255 / 75%), inset 0px 3.19298px 5.01754px -1.82456px #ffffff, inset 0px -37.4035px 31.0175px -29.193px rgb(96 68 145 / 30%), inset 0px 44.7017px 45.614px -21.8947px rgb(202 172 255 / 30%), inset 0px 1.82456px 8.21052px rgb(154 146 210 / 30%), inset 0px 0.45614px 18.2456px rgb(227 222 255 / 20%)",
			},
		},
	},
	plugins: [],
};
