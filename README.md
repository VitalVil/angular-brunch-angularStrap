# angular-brunch-angularStrap
### A starter project for AngularJS using Brunch.io

[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io)

Features:
* Full JS & HTML (no Coffeescript, no Jade) & SCSS automatically compiled on save (No ruby, we use node-sass & node-bourbon !)
* Modernizr (because IE9 is still alive)
* auto-reload
* Javascript / CSS minification for production
* [karma]
* AngularStrap

##Based On

* angular-brunch-seed-no-fuss [https://github.com/ocombe/angular-brunch-seed-no-fuss] by Olivier Combe

## How to use

* `git clone https://github.com/VitalVil/angular-brunch-angularStrap` to clone the  repository
* `cd  angular-brunch-angularStrap`
* `npm install` (resolve version to 1.2+ instaed 1.3+ if asked during setup)

or if you have **Brunch** installed run:

`brunch new myapp --skeleton https://github.com/VitalVil/angular-brunch-angularStrap`

### Running the app during development

* `npm start` to serve using **Brunch**

Then navigate your browser to [http://localhost:3333](http://localhost:3333)
If you use your own server, you can use the development script :

* `npm run-script dev`

### Running the app in production

* `npm run-script prod` to minify javascript and css files for production deployment

### Running unit tests

* `npm test` to run unit tests with [karma](http://karma-runner.github.io)
* Open the browser you would like to test to [http://localhost:3334](http://localhost:3334)

Notes:

- Karma will run tests on save. To insure that changes are saved be sure to have `npm start` or `npm run-script dev` running in the console
- You can set the browsers that you would like to target in the `/test/karma_conf.js` file E.g. `browser = ["ChromeCanary", "Firefox"]`

### End to end testing

* Run the app in development mode as described above using a separate terminal
* `npm run-script test-e2e` to run e2e tests with [karma](http://karma-runner.github.io) using protractor
* Be aware that changing the SCSS files will compile the new CSS while the server is running, but that it won't trigger a e2e test reload, you'll have to manually relaunch the test server fow now

### Common issues

`EMFILE` error
- EMFILE means there are too many open files. Brunch watches all your project files and it's usually a pretty big number. You can fix this error with setting max opened file count to bigger number with command <b>ulimit -n <number></b> (4096 should be enough).

The complete [Brunch FAQ](https://github.com/brunch/brunch/blob/master/docs/faq.md)

