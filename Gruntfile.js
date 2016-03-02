"use strict";

module.exports = function (grunt) {

   // Load all tasks
   require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

   // Project configuration.
   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      clean: {
         build: {
            src: ["dist"]
         }
      },

      less : {
         main: {
            options: {
               strictMath       : false,
               compress         : false,
               sourceMap        : true,
               outputSourceFiles: true,
               sourceMapURL     : 'dist/app.css.map',
               sourceMapFilename: 'dist/app.css.map'
            },
            files  : {
               "dist/app.css": "src/app.less"
            }
         }
      },

      sass : {
         dist: {
            options: {
               style: 'expanded',
               precision: 8 // avoid line-height inconsistency
            },
            files  : {
               'dist/app.css': 'src/app.scss'
            }
         }
      },

      watch: {
         less: {
            files: ['bower_components/bootstrap/less/**', 'src/*.less', 'Gruntfile.js'],
            tasks: ['less']
         },
         sass: {
            files: ['bower_components/bootstrap-sass-official/assets/stylesheets/**/*', 'src/*.scss', 'Gruntfile.js'],
            tasks: ['sass']
         }
      }
   });

   grunt.registerTask('default', ['clean']);
};
