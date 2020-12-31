# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Setup

# Getting started

Repositorio base para desarrollar cualquier web-app utilizando React con Typescript

## Installation

```bash
npx create-react-app . --template typescript

```
## Instalar dependencias | Plugins

```bash
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

```
Plugin de Airbnb
```
npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.20.1 \
            eslint-plugin-jsx-a11y@^6.2.3 \
            eslint-plugin-react@^7.19.0 \
            eslint-plugin-react-hooks@^2.5.0 \
            @typescript-eslint/eslint-plugin@^3.1.0 \
            --save-dev
```
```
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-eslint-comments
```
## Config files
.eslintignore
```
# don't ever lint node_modules
node_modules
# don't lint built version
build
# don't lint nyc coverage output
coverage
# ignora el archivo que configura eslint
.eslintrc.js
```

.eslintrc.js.
```
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'jest', 'eslint-comments'],
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:eslint-comments/recommended',
		'plugin:jest/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	rules: {
		['import/prefer-default-export']: 0,
	},
};
```

.prettierrc.json
```
{
  "singleQuote": true,
  "useTabs": true
}
```

.prettierignore
```
node_modules
build
coverage
```

## Configuración Webstorm

```
- Activar prettier
    1. settings > languages & frameworks > Javascript > Prettier
    2. Acitivar run on save for files
    3. Asegúrate de que hay un Prettier package. Sino instala prettier otra vez
- Desactivar chequeo de grammar y ortografía
    1. Settings > Editor > Inspections
    2. busca Proofreading y des selecciona
- keymaps
    - Split vertically
        - terminal y editor tabs  =  ctrl + S
    - Goto next/Previous Splitter = ctrl + command + ←/→
    - Terminal = command + §
    - Hide active tool window = command + escape
- Usar tabs
    1. Code Style > Typescript
    2. Use tab character
- Activar eslint
    1. settings > languages and frameworks > javascript > code quality tools > eslint
    2. Poner radio button en automatic eslint configuration
- Correr desde package.json test script picándole al de play
```
