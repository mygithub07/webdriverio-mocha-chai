
- This is an example (my set up is on mac) to show browser automation with webdriverio using mocha framework and chai assertions (BDD style). It also uses before() and after() functions that mocha provides. This is also helpful in understanding how asynchronous testing is done using mocha.
- Make sure mocha and chai  are installed at same locations as webdriverio . Mine was installed locally in node_modules
- Before running test, start selenium server as usual. This is required for webdriverio,
- From cmd go to folder where mocha-test.js is located and run command "mocha mocha-test.js --timeout 15000"
- Test should run in chrome browser and at the end you should see something like "12 passing (12s)" in console if everything is fine.

