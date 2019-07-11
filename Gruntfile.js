module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['./library/js/script.js'],
        dest: 'dist/JS/main.js',
      },
      css: {
        src: ['./library/css/custom_styles.css', './library/css/style.css', './library/css/mobile.css'],
        dest: 'dist/CSS/Styles.css',
      }
    },

    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          'main.css': 'main.scss' // 'destination': 'source'
        }
      }
    },

    // sass: {
    //   build: {
    //     files: [{
    //           //       '/library/SASS/styles.scss': '/dist/CSS/style.css'

    //       // expand: true,
    //       // cwd: 'styles',
    //       // src: ['./library/sass/*.sass'],
    //       // dest: './dist/CSS/',
    //       // ext: '.css'
    //     }]
    //   }
    // },

    // sass: {
    //   dist: {
    //     files: [{
    //       '/library/SASS/styles.scss': '/dist/CSS/style.css'
    //     }]
    //   }
    // },


    watch: {
      js: {
        files: ['./library/JS/**/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['./library/CSS/**/*.css'],
        tasks: ['concat'],
      },
    }



  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask("default", ['concat', 'sass', "watch"]);

};