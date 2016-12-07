module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

webdriver: {
    
    test: {
        configFile: './wdio.conf.js'
    }
  }
});
  // Load grunt webdriver task
  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};