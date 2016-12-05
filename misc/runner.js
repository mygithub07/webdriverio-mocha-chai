var MochaSauce = require("./node_modules/mocha-sauce/index.js");

// configure
var sauce = new MochaSauce({
    name: "project", // your project name
    username: "neeshpal", // Sauce username
    accessKey: "f5ac1024-63cd-4082-beee-62bd7a9c5bfc", // Sauce access key
    host: "localhost", 
    //host: "http://ondemand.sauce.com" ,
    port: 4445, // 80
    //port: 80,

    // the test url
    url: "http://localhost:4445/mocha-test.html" // point to the site running your mocha tests
});



// setup what browsers to test with
sauce.browser({ browserName: "chrome", platform: "Windows 7" });
sauce.browser({ browserName: "firefox", platform: "Windows XP" });


sauce.on('init', function(browser) {
  console.log('  init : %s %s', browser.browserName, browser.platform);
});

sauce.on('start', function(browser) {
  console.log('  start : %s %s', browser.browserName, browser.platform);
});

sauce.on('end', function(browser, res) {
  console.log('  end : %s %s : %d failures', browser.browserName, browser.platform, res.failures);
});

sauce.start();