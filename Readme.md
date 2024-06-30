Episode - 2

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

Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles
