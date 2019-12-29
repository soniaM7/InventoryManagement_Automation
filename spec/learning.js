var selenium = require('selenium-webdriver');

describe('LoginText', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        driver.get('https://www.canvusapps.com/login').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        driver.quit().then(done);
    });

	it('Should be on the home page', function(done) {

		driver.get('https://www.canvusapps.com/login')
		.then(function(){
			console.log("1:");
			return driver.wait(function() {
			   console.log("2:");
			   return driver.findElements(selenium.By.css('label'));
			 }, 8000);
		})
    .then(function(){
    done();
  });
});
});
