
var selenium = require('selenium-webdriver');

const helper = require("../../helpers/helper.js");

describe('LoginCheck',function(){
    beforeEach(function(done){
      driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).
      build();
      driver.get('https://www.canvusapps.com/login').then(done);
    })
    afterEach(function(done){
      driver.quit().then(done);
    })

  it('Login',function(done){
    helper.printMessage();
    driver.get('https://www.canvusapps.com/login')
    .then(function(){
      cosole.log("1");
      return driver.wait(function(){
        console.log("2");
        return driver.findElement(selenium.By.css('label'));
      }, 4000);
    })
  })
  .then(done);
})
