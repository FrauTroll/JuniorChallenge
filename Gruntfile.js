module.exports = function(grunt) {
  grunt.registerTask("default",[exec","copy-require"])
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.initConfig({
    jshint: {
      all:["Gruntfile.js"]
    }
  });
};
