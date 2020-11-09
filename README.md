# Svelte with Typescript and TailwindCSS built with Snowpack

> ✨ Community template for Snowpack + Svelte + Typescript + TailwindCSS

Create a new project with:

```bash
npx create-snowpack-app dir-name --template snowpack-svelte-ts-tw
```

Uses `svelte-preprocess`

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

### Q: Husky/Lint-Staged

You will notice that `Husky`/`Lint-Staged` configs are already present in the `package.json` file, but not in the `devDependencies`, this is because CSA installs packages and then inits the `git` repo, so the `Husky` commit hook installation fails. To reenable `Husky`/`Lint-Staged`, just re-add `Husky` and `Lint-Staged` to the `devDependencies` and you should be good to go!
