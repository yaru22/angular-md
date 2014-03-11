/* global require, module */

'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      src: 'src',
      dist: 'dist',
      demo: 'demo'
    },

    meta: {
      banner: '/**\n' +
      ' * <%= pkg.description %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.homepage %>\n' +
      ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
      ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
      ' */\n'
    },

    //
    // Configuring grunt helpers
    //

    clean: ['<%= dirs.dist %>'],

    concat: {  // grunt-contrib-concat
      options: {
        banner: '<%= meta.banner %>'
      },
      js: {
        src: ['<%= dirs.src %>/*.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.js'
      }
    },

    connect: {  // grunt-contrib-connect
      dev: {
        options: {
          port: 9999,
          hostname: '0.0.0.0',
          base: '<%= dirs.demo %>',
          keepalive: true
        }
      }
    },

    copy: {
      demo: {
        files: [{
          expand: true,
          flatten: true,
          src: [
            '<%= dirs.dist %>/<%= pkg.name %>.js'
          ],
          dest: '<%= dirs.demo %>/',
          filter: 'isFile'
        }]
      }
    },

    jshint: {  // grunt-contrib-jshint
      all: [
        'Gruntfile.js',
        '<%= dirs.src %>/**/*.js',
        'test/unit/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    karma: {  // grunt-karma
      single: {
        configFile: 'karma-unit.conf.js',
        singleRun: true
      }
    },

    ngmin: {  // grunt-ngmin
      dist: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dist %>',
          src: '*.js',
          dest: '<%= dirs.dist %>'
        }]
      }
    },

    open: {  // grunt-open
      demo: {
        path: 'http://localhost:9999/'
      }
    },

    release: {  // grunt-release
      options: {
        file: 'bower.json',
        npm: false
      }
    },

    uglify: {  // grunt-contrib-uglify
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= dirs.dist %>/<%= pkg.name %>.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.min.js'
      }
    },

    watch: {  // grunt-contrib-watch
      src: {
        files: [
          '<%= dirs.src %>/*.js'
        ],
        tasks: ['test'],
      }
    }
  });


  //
  // Grunt tasks.
  //

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'build',
    'run'
  ]);

  // Test task.
  grunt.registerTask('test', [
    'jshint:all',
    'karma:single'
  ]);

  // Build task.
  grunt.registerTask('build', [
    'test',
    'concat',
    'ngmin',
    'uglify',
    'copy'
  ]);

  // Run dev server.
  grunt.registerTask('run', [
    'open',
    'connect'
  ]);

  // Shortcuts
  grunt.registerTask('b', 'build');
  grunt.registerTask('c', 'clean');
  grunt.registerTask('s', 'run');
  grunt.registerTask('t', 'test');
};
