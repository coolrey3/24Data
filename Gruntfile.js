const mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({


    concat: {
      js: {
        src: ['./library/js/script.js'],
        dest: 'dist/JS/main.js',
      },
      css: {
        src: ['./library/css/main.css', './library/css/style.css', './library/css/mobile.css'],
        dest: 'dist/CSS/Styles.css',
      }
    },


    watch: {
      js: {
        files: ['./library/JS/**/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['./library/CSS/**/*.css'],
        tasks: ['concat'],
      },
    },


    uglify: {
      my_target: {
        files: {
          'dist/JS/main.min.js': ['./library/js/script.js']
        }
      }
    },

    imagemin: {
      static: {
          options: {
              optimizationLevel: 3,
              svgoPlugins: [{removeViewBox: false}],
              use: [mozjpeg()] // Example plugin usage
          },
          files: {
              'dist/images/cropped_phone1_minified.png': 'library/img/cropped_phone1.png',
              'dist/images/DT-cropped_min.png': 'library/img/DT-cropped.png',
              // 'dist/img.gif': 'library/img/img.gif'
          }
      },


      dynamic: {
          files: [{
              expand: true,
              cwd: '/library/img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'dist/images/'
          }]
      }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'dist/CSS',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/CSS',
        ext: '.min.css'
      }]
    }
  }
  


  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

// Register Default
  grunt.registerTask("default", ['concat', 'uglify','imagemin', 'watch']);

};