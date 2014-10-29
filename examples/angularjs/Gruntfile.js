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
    },
    karma: {
      unit: {
        configFile: 'test/config/karma.conf.js'
      }
    },
    jasmine: {
      src: ['app.js', 'js/**/*.js'],
      options: {
        specs: 'test/unit/*Spec.js',
        vendor: ['bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'test/lib/angular-mocks.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('metrics', ['jshint', 'plato']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jasmine']);
};
