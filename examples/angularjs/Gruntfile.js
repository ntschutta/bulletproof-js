module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,
    jshint: {
      files: ['js/**/*.js', 'test/unit/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        noempty: true,
        quotmark: "single",
        //quotmark: true,
        undef: true,
        predef: ["localStorage", "module"],
        unused: true,
        strict: true,
        maxcomplexity: 4
      }
    },
    plato: {
      plato_report: {
        // options : {
        //   jshint : false
        // },
        files: {
        'report': ['js/**/*.js', 'test/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');

  grunt.registerTask('metrics', ['jshint', 'plato']);
  grunt.registerTask('default', ['jshint']);
};
