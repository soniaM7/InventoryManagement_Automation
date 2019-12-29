
var selenium = require('selenium-webdriver');

//const helper = require("../../helpers/helper.js");

describe('LoginCheck',function(){
    beforeEach(function(done){
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;
      driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).
      build();
      driver.get('https://www.canvusapps.com/login').then(done);
    });
    afterEach(function(done){
      driver.quit().then(done);
    });


  it('Login',function(done){
    //helper.printMessage();
    driver.get('https://www.canvusapps.com/login')
    .then(function(){
      cosole.log("1");
      return driver.wait(function(){
        console.log("2");
        return driver.findElement(selenium.By.css('label'));
      }, 4000);
    })
    .then(function(){
      return driver.findElement(selenium.By.id('email'))
    })
    .then(function(elem1) {
      return elem1.sendKeys("sonia.miglani33@gmail.com")
    })
    .then(function(){
      return driver.findElement(selenium.By.id('password'))
    })
    .then(function(elem2) {
      return elem2.sendKeys("Sonia@12345")
    })
    .then(function(){
      return driver.findElements(selenium.By.name('button'))
    })
    .then(function(button) {
      return button[0].click();
    })
    .then(function(){
      console.log("3");
      return driver.wait(function(){
        console.log("4");
        return driver.findElement(selenium.By.id("catalogFilter"));
      })
    })
    .then(function(){
      return driver.getTitle();
    })
    .then(function(title){
      console.log("title: " + title + " ")
      expect(title.toBe("Ericsson India Private Limited"))
    })
  .then(function(){
    return driver.sleep(1000);
  })
  })
  .then(done);
});
