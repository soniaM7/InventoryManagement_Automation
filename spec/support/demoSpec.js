var selenium = require('selenium-webdriver');

describe('LoginText', function() {
    beforeEach(function(done){
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;
      driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).
      build();

      driver.get('https://www.canvusapps.com/login').then(done);

    });

    afterEach(function(done){
      driver.quit().then(done);

    });

  it('Should be on the home page',function(done){

    driver.get('https://www.canvusapps.com/login')
    .then(function(){
      console.log("1");
       return driver.wait(function(){
        console.log("2");
        return driver.findElements(selenium.By.css('label'));

      }, 7000);

    })
    .then(function(){
      return driver.findElement(selenium.By.id('email'))
    })
    .then(function(elem){
      console.log("3");
      return elem.sendKeys('sonia.miglani33@gmail.com')
    })
    .then(function(){
      return driver.findElement(selenium.By.id('password'))

    })
    .then(function(elem2) {
      return elem2.sendKeys("Sonia@12345")

    })
    .then(function(){
			console.log("4:");
			return driver.findElements(selenium.By.name('button'))
		})
    .then(function(elements){
			console.log("5");
			return elements[0].click();
		})
    .then(function(){
      console.log("6");
      return driver.wait(function(){
        console.log("7");
        return driver.findElement(selenium.By.id('catalogFilter'));

      }, 10000);
    })
    .then(function(){
      console.log("8");
      return driver.getTitle();
    })
    .then(function(title){
      console.log("Title: ' " + title + "'");
      expect(title).toBe('Ericsson India Private Limited');

    })
    .then(function(){
			return driver.sleep(1000);
		})
		.then(done);
	})

});
