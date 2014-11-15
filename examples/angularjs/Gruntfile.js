module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,
    jshint: {
      files: ['js/**/*.js', 'test/unit/*.js'],
      options: {
        '-W117': true,
        jshintrc: true,
        //jshintrc: '../../.jshintrc'
        reporter: require('jshint-stylish')
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
