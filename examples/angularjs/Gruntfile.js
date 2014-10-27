module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,
    jshint: {
      files: ['js/**/*.js', 'test/unit/*.js'],
      options: {
        //curly: true,
        //eqeqeq: true,
        //noempty: true,
        // quotmark: "single",
        //quotmark: true,
        //undef: true,
        //predef: ["localStorage", "module"],
        //unused: true,
        //strict: true,
        //maxcomplexity: 2
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
