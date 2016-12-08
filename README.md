
# End to end automaion example - webdriverio-mocha-chai-jenkins-allure
- This is an example (setup was on mac) to show browser automation with webdriverio using mocha framework, chai for assertions (BDD style), Jenkins for CI and allure for reporting. I've build it so it uses page objects (in webdriverio-mocha-chai/test/specs/page-objects/)
- Make sure webdriverio,wdio-mocha-framewok, chai, grunt-webdriver  and wdio-allure-reporter  are installed( at same locations locally) . Mine was installed locally in node_modules
- Before running test, start selenium server as usual(this will work for both standalone selenium server and selenium grid) This is required for webdriverio.
- Download contents in a folder
- Jenkins should be installed and setup with git, node.js and allure reporter plugin. All these plugins should be configured properly in global tool configuration in jenkins
- Once plugins are installed and configured in Jenkins, create a free style project and 
  1. provide this repository as git repo in SCM
  2. check "Provide Node & npm bin/ folder to PATH" in Build Environment
  3. Add build step "execute shell" and add 
    
    `export PATH=/usr/local/bin`
    
    `grunt`
   4. add post build actions "Allure report"   
      - provide `./allure-results` under Results
      - provide `variant` in Key and `${VARIANT}` in value under properties
- Once everything is saved in Jenkins, build the project. You should see your tests running.
- For allure reports, if you get any error upon clicking allure report link and report seems broken, run these command in Jenkins--> Manage jenkins--> script console.

`System.setProperty("jenkins.model.DirectoryBrowserSupport.CSP", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';")
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';")`
   

