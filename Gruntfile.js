module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.initConfig({
    jshint: {
      all:["Gruntfile.js", "hello.js"]
    }
  });

  grunt.registerTask('default', ['jshint']);
};
