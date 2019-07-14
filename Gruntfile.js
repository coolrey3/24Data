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
          'dist/JS/output.min.js': ['./library/js/script.js']
        }
      }
    }
  


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask("default", ['concat', 'uglify' 'watch']);

};