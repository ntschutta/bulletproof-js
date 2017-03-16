module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,
    jshint: {
      files: ['js/**/*.js', 'test/unit/*.js'],
      options: {
        reporterOutput: ""
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
