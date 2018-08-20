
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://app.gogrow.com');

// Setup by logging in
driver.findElement(By.name('email')).sendKeys('tamarafox.sa@gmail.com');
driver.findElement(By.name('password')).sendKeys('Test123');
driver.findElement(By.css("[class='sign-in btn']")).click();

// Add a new dashboard Test
driver.sleep(2000);
driver.findElement(By.className("dashboardManagerControl---newControl---3b13g")).click();
driver.findElement(By.className("button")).click();
driver.findElement(By.tagName("input")).sendKeys("DashboardTest");
driver.findElement(By.css("[type='submit']")).click();


driver.sleep(2000).then(function() {

    driver.quit();
  });
