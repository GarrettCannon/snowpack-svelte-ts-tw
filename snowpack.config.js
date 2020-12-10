/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	mount: {
		public: "/",
		src: "/_dist_",
	},
	plugins: [
		[
			"@snowpack/plugin-build-script",
			{ cmd: "postcss", input: [".css"], output: [".css"] },
		],
		"@snowpack/plugin-svelte",
		"@snowpack/plugin-dotenv",
		"@snowpack/plugin-typescript",
	],
	install: [
		/* ... */
	],
	installOptions: {
		installTypes: true,
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
	proxy: {
		/* ... */
	},
	alias: {
		/* ... */
	},
};
