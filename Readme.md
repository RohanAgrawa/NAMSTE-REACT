# Episode - 2

- Parcel :-

  Parcel is a dependency which comes with the npm package it genrally help us to bundle our code to make it production or development ready.

  Bundling is very important because we wrote code in different format like JS, HTML, CSS to minify our code bundling is very important, parcel is doing job for us in the process of minifying.

  npm install -D parcel

  This command is installing parcel for us, while -D is showing its Dev or Development Dependency.

  Parcel will create a server to host our application

  This command is used to build a application for developement purpose { npx parcel index.html }
  This command is used to build a application for developement purpose { npx parcel build index.html }

- DEV Dependency and Normal Dependency :-

  The Dev Dependecy are the dependecy which is used in our local to run the application with a set of packages.

  The Normal Dependency are the production Dependency which goes with our code to run in production.

- Dependecy and pacakges are different name but refers to same thing like when we install any npm package either we call it
  dependency or package

- Package.json :-

  package.json is a configuration file for npm and it contains all the dependencies with it version number

- ^ caret and ~ tilde -

  "devDependencies": {
  "parcel": "^2.12.0"
  }

  ^ this is a caret symbol which help us automatically upgrade the minor whenever its going to release. suppose currently 2.12.0 later it will automatically upgrades to 2.12.1 or something which gonna release.

  While ~ tilde symbol will upgrade dependency with major version.suppose currently 2.12.0 later it will automatically upgrades to
  3.0.0 or something which gonna release.

* Package-lock.json :-

  package-lock is genrally maitains the exact version of the dependency as well hashing or integrity so that production as well as on local have same kind of or same version dependency while using the hashing

- node_modules :-

  node_modules folder is like a database which contains all packages with its package dependecy with actual codebase

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# ----------------------------------------------------------------------------------------------------------------------------------------

# Episode : -3

# JSX

We rendered a react element for HTML tag using a React.createElement but when number of lines increases in code then it become difficult to uderstand what we wrote it does not give as proper visibility and debugging of our code.

To make our life easier JSX comes in a picture.

const heading = React.createElement("h1", { id: "heading" }, "Namste React");

const jsxHeader = <h1 id="heading">Namste React</h1>;

This a simple jsx code.

- JSX is not a HTML
- JSX is not a React
- JSX is writtern by META developers to make our life easier to wirte HTML/XML like syntax.

If we try to print both heading and jsxHeader on console it will print a same object, because we are using a parcel to build our React code to compile and transpile to JS.

Behind the scene Parcel is dependent on babel which is open source library do all compilation and Traspile of our code.

When we try simply run a JSX on a browser console we can't run it because it is not a actual Javascript.

Now Babel come in picture, Now Babel is converting a JSX code to React.CreateElement then HTML tag,
That is the reason both heading and jsxHeading printing the same object on console.

const jsxHeader = (

  <div>
    <h1 id="heading">Namste React</h1>
    <h2> Hello</h2>
  </div>
);

For multi line expression of JSX code it must be enclosed with in bracket.

# Package.json

In Package.json "Scripts" are the best place to store our commands to run our project.

"start" : "npx parcel index.html"

In this way we can store all commands for dev, production as well as other enviornments,
In scripts here we can add all necessary commands to run our project.

npm run start and npm start both are same.

if we want to run any script command just write

npm run scriptKey

script key is like start, test, build.

# Components

Everyting in React is component suppose if want to build a button or card or anything we will create it as a component.

Component name always start with Capital letter with Suffix at the is Component.
for eg :- HeaderComponent

Their are two type of components :-

- Functional Component
- Class Component

Functional Component :-

Functional Component is a simple Javascript function that return JSX.

Function Component can be used as JS arrow function or JS Normal function.

If we want to add any outside JSX expression inside our Functional component JSX code then we can use {} this brackets.
we can add the outside JSX variable in the curly braces.

{} This is powerful brackets to use inside JSX, we can perfom any Javascript code here inside JSX.

JSX is powerful thing it sanitize all the data we are passing into it. JSX performs checks on data weather it is malicous or good. Then
it send to browser.

To use Function component we use angular brackets

<HeaderComponent /> OR <HeaderComponent><HeaderComponent />
