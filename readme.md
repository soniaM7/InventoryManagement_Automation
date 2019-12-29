source= https://github.com/allure-framework/allure-jasmine/blob/master/README.md

Under packages.json we define scripts.

"scripts": {
1  "test": "jasmine",
2  "testlib": "node jasmine.js",
3  "posttest": "allure generate allure-results --clean -o allure-report || true",
4  "openReport": "allure open allure-report"
"

1. means we will run --  npm run test // matlab ye run jasmine hi karega. Jasmine jab
init hota hai to ek spec folder banata hai and usme support folder has jasmine.json file
wo batata hai kese file dundhni hai.

2. "testlib": "node jasmine.js"
now we have created our own jasmine.js file now it will not go to spec and support folder.
why we created jasmine.js ? here we have given the AllureReporter for reporting . It will create
a report in xml format.

3."posttest": "allure generate allure-results --clean -o allure-report || true",
it will convert xml format to html format.

4."openReport": "allure open allure-report"
Browser doesnt open javascript if we try to open locally . It allow javascript from the server
and open. so with this command it create a server and allow javascript page to open.
