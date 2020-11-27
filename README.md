# Intro
*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

This project is an opinionated and pre-configured app skeleton for React. Some of the design decisions include:
- using CSS pre-processor with the BEM model instead of the CSS-IN-JS convention
- using TypeScript as much as possible for static type checking
- a clear separation of responsibilities between pages and UI components

This project is a template with the following libraries
- LESS as a CSS preprocessor
- ant design as UI library
- TypeScript
- craco instead of react-scripts

# Who is this for

This app skeleton design was loosely based around another design I made for a school project. The motivation originates from the idea where it has to be incredibly easy to add in new functionality. If I were to pick a targeted audience for this, I will say its for students trying to quickly kick start a react project without having to set up a ton of boilerplate code like a navigation bar, routing, TypeScript support, determining how the app strucutre should look like, all that boring stuff.

# Quick Start

Run this command to use it now:

`npx create-react-app your-app-name --template cra-template-xz`

## Adding a page

To create a page, simply 
1. create a new folder under `/src/pages`
2. create a new TypeScript component and a corresponding LESS style sheet
3. Import that component into the `/src/pages/index.tsx` file
   - wrap your component around the `Template` component
   - you can control whether to lazy load the new page component
   - the `title` prop allows you to set the window title of the tab and the title of the page header
4. import the wrapped page component directly from the index file into the App and setup routing from there

## Setting up the new page in the menu and configure routing

To create a new tab in the menu, simply
1. Go to `/src/App.tsx` and add a new item in the `menuConfig` array
2. the properties of the object can be found in its TypeScript interface, you can give it
   - a string as the title
   - an icon that follows the `IconBaseProps` type
   - a string path for the history to route to

To create a new route, simply
1. add your new page component into the router component

**Note:** You should not have to touch the `Nav` component to create a new tab, just use the `menuConfig` object.

# Pages VS Components

In theory, page components are meant to act as wrappers. You can do data fetching or state management here and pass them to your React Components as reactive props. You can do routes specific functionality here too, like interacting with SessionStorage or logging or analytics. The components more or less act as a traditional react components. 

The goal of splitting Pages and Components into 2 distinct and logical categories is to split their responsiblities. For example, we can test our Components very easily without the need for hydrating a global state or do data-fetching since that is the responsibility of the Page. We can also normalize the fetched / global state data at the Page level and let it cascade down the tree rather than doing it at every single component.

# Others

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
