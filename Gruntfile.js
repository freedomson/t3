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
          'dist/index.html': 'index.src.html',
          'dist/lib/angular.js': 'lib/angular.js'
        }
      },
      dev: {
        files: {
          'index.html': 'index.src.html'
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
          livereload: {
            host: 'localhost',
            port: 9000,
            key: grunt.file.read('server.key'),
            cert: grunt.file.read('server.crt')
            // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
          }
        },
        files: [
          'src/features/*/*.js',
          'src/features/*/*.html',
          'src/features/*/*.css',
          'src/css/*.css',
          'src/*.js',
          'index.src.html'
        ],
        tasks: [/*'targethtml:dev' THIS CANT BE RELOADS PAGE*/]
      }
    },

    'http-server': {
      dev: {
        root: '.',
        port: 443,
        host: "0.0.0.0",
        https: {
            cert: "server.crt",
            key : "server.key"
        },
        headers: {
          "Access-Control-Allow-Origin": "www.gugamarket.com",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        cache: -1,
        runInBackground: true
      },
      dist: {
        root: './dist',
        port: 443,
        host: "0.0.0.0",
        https: {
            cert: "server.crt",
            key : "server.key"
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        cache: -1,
        runInBackground: true
      }
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    console.log(action + ' - ' + filepath);
  });

  grunt.registerTask('open', function () {
    var url = 'https://localhost';
    grunt.log.writeln('demo running at: ' + url);
    require('open')(url);
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', []);

  grunt.registerTask('dev', ['http-server:dev', 'targethtml:dev', 'open', 'watch:ngTemplates']);

  grunt.registerTask('build', ['http-server:dist','html2js:dist','concat','uglify','targethtml:dist', 'copy:main', 'watch:ngTemplates']);

  grunt.registerTask('reload', ['targethtml:dev']);

  grunt.event.once('http-server.demo.listening', function(host, port) {

  });

  grunt.event.once('http-server.dist.listening', function(host, port) {

  });
};
