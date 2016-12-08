
- This is an example (setup was on mac) to show browser automation with webdriverio using mocha framework and chai assertions (BDD style). I've build it so it uses page objects. 
- Make sure webdriverio,wdio-mocha-framewok, chai, grunt-webdriver  and wdio-allure-reporter  are installed( at same locations locally) . Mine was installed locally in node_modules
- Before running test, start selenium server as usual. This is required for webdriverio,
- download contents in a folder
- Jenkins should be installed and setup with git, node.js and allure reporter plugin and all these plugins should be configured properly in global tool configuration(allure report may not work at this time, still working on it)
- Once plugins are installed and configured in Jenkins, create a free style project and 
  1. provide this repository as git repo in SCM
  2. check "Provide Node & npm bin/ folder to PATH" in Build Environment
  3. Add build step "execute shell" and add 
    export PATH=/usr/local/bin
    grunt
   4. add post build actions "Allure report"   (still working on this)
      - provide "./allure-results" under Results
      - provide "variant" in Key and "${VARIANT}" in value under properties
- Once everything is saved in Jenkins, build the project. You should see your tests running.
     
   

