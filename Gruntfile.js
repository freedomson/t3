module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './libs',
          cleanTargetDir: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/app.js': [ 'dist/app.js' ]
        },
        options: {
          mangle: false
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'src/*.js','src/*/*/*.js'],
        dest: 'dist/app.js'
      },
      dist_css: {
        src: [ '*.css'],
        dest: 'dist/main.css'
      }
    },

    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'index.html',
          'dist/reload-todos.js': 'reload-todos.js',
        }
      }
    },
    html2js: {
      options: {
        base: '',
        module: 'templates-dist',
        singleModule: true,
        useStrict: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      dist: {
        src: [ 'src/*/*/*.html' ],
        dest: 'dist/lib/templates.js'
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          //{expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

          // includes files within path and its sub-directories
          {expand: true, src: ['fonts/**'], dest: 'dist/'},
          {expand: true, src: ['images/**'], dest: 'dist/'}
          // makes all src relative to cwd
          //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
    },
    watch: {
      options: {
        atBegin: true,
        livereload: false,
        reload: false,
        spawn: false,
        nospawn: true
      },
      ngTemplates: {
        options: {
          livereload: true
        },
        files: [
          'src/features/*/*.js', 
          'src/features/*/*.html', 
          'main.css',
          'index.html',
          'dist/index.html',
          'dist/app.js',
          'dist/main.css'
        ],
        tasks: ['reload']
      }
    },

    'http-server': {
      demo: {
        root: '.',
        port: 3003,
        cache: -1,
        runInBackground: true
      },
      dist: {
        root: './dist',
        port: 3006,
        cache: -1,
        runInBackground: true
      }
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    console.log(action + ' - ' + filepath);
  });

  grunt.registerTask('open', function () {
    var url = 'http://localhost:3003';
    grunt.log.writeln('demo running at: ' + url);
    require('open')(url);
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', []);

  grunt.registerTask('demo', ['http-server:demo', 'open', 'watch:ngTemplates']);

  grunt.registerTask('build', ['http-server:dist','html2js','concat','uglify','targethtml:dist', 'copy:main', 'watch:ngTemplates']);

  grunt.registerTask('reload', ['html2js','concat','uglify','targethtml:dist', 'copy:main']);

  grunt.event.once('http-server.demo.listening', function(host, port) {

  });

  grunt.event.once('http-server.dist.listening', function(host, port) {

  });
};
