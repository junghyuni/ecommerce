const pkg = require("./package");
require("dotenv").config();

module.exports = {
	mode: "universal",

	/*
	 ** Headers of the page
	 */
	head: {
		title: "Al-Dokkaan",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: pkg.description
			},
			{ name: "theme-color", content: "#D50000" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "preconnect",
				href:
					"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
			},
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
			}
			//TODO: { rel: 'preload', as: 'style', onload:'this.rel = "stylesheet"', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: "#D50000",
		height: "2px"
	},
	/*
	 ** Customize app manifest
	 */
	manifest: {
		theme_color: "#D50000"
	},
	/*
	 ** Global CSS
	 */
	css: ["~/assets/style/app.styl", "~/assets/style/main.css"],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ["@/plugins/vuetify", "~/plugins/socket.io.js"],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/axios",
		"@nuxtjs/pwa",
		"@nuxtjs/toast",
		"@nuxtjs/component-cache",
		"@nuxtjs/dotenv"
	],
	/*
	 ** Axios settings
	 */
	axios: {
		baseURL: process.env.API_URL || "http://localhost:1337"
	},
	/*
	 ** Environment Settings
	 */
	env: {
		SOCKET_HOST_URL: process.env.SOCKET_HOST_URL || "http://localhost:1337"
	},
	/*
	 ** Page Routing Transition
	 */
	transition: {
		name: "fade",
		mode: "out-in"
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
};
