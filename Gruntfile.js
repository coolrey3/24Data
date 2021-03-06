module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({


    concat: {
      // js: {
      //   src: ['/library/js/script.js'],
      //   dest: '/dist/JS/main.js',
      // },
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
      dynamic: {
        files: [{
          expand: true,
          cwd: 'library/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/IMG'
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
  grunt.registerTask("default", ['concat', 'watch']);

};