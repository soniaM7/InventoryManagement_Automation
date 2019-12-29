var selenium = require ('selenium-webdriver')
//jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;

describe('LoginText',function() {
  beforeEach(function(done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.chrome())
      .build();
    driver.get('https://www.canvusapps.com/login').then(done);
  });

  afterEach(function(done){
    driver.quit().then(done);
  });

  it('Should be on the home page',function(done) {
    //driver.get('https://www.canvusapps.com/login')
    //.then(function() {
      console.log("practice test log1 executing");
      return driver.wait(function() {
        console.log("2");
        return driver.findElements(selenium.By.css('label'));
      },8000)
    //})
    .then(function() {
      return driver.findElement(selenium.By.id('email'))
    })
    .then(function(element1){
      console.log(JSON.stringify(element1));
      return element1.sendKeys('sonia.miglani33@gmail.com');
      //return "test";
    })
    .then(function() {
      return driver.findElement(selenium.By.id('password'))
    })
    .then(function(element2) {
      console.log(JSON.stringify(element2));
      return element2.sendKeys('Sonia@12345');
    })
    .then(function(){
      return driver.findElements(selenium.By.name('button'))
    })
    .then(function(elements){
      console.log(JSON.stringify(elements[0]));
      return elements[0].click();
    })
    .then(function(){
    done();
    })
    .catch(function(error) {
            console.log("error:" + error);
    });
  });
});
