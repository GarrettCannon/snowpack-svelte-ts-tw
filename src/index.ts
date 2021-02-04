import App from "./App.svelte";
import "./styles/Tailwind.css";

var app = new App({
	target: document.body,
});

export default app;

if (import.meta?.hot) {
	// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
	// Learn more: https://www.snowpack.dev/#hot-module-replacement
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}

//Type override for Import/env so TS doesn't complain
declare global {
	interface ImportMeta {
		hot: {
			accept: Function;
			dispose: Function;
		};
		env: {
			MODE: string;
			SNOWPACK_PUBLIC_API_URL: string;
		};
	}
}
