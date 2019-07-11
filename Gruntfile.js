module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['./library/js/script.js', './library/js/script1.js', './library/js/script2.js', './library/js/script3.js'],
        dest: 'build/JS/Scripts.js',
      },
      css: {
        src: ['./library/css/custom_styles.css', './library/css/style.css', './library/css/mobile.css'],
        dest: 'build/CSS/Styles.css',
      },

    },
    watch: {
      js: {
        files: ['./JS/**/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['./CSS/**/*.css'],
        tasks: ['concat'],
      },
    },

  //   sass: {                              // Task
  //     dist: {                            // Target
  //       options: {                       // Target options
  //         style: 'expanded'
  //       },
  //       files: {                         // Dictionary of files
  //         'main.css': 'main.scss',       // 'destination': 'source'
  //         'widgets.css': 'widgets.scss'
  //       }
  //     }
  //   }
  // });

  sass: {
      dist: {
        files: {
          'main.css': 'main.scss',
          'widgets.css': 'widgets.scss'
        }
      }
    }

});
    // sass: {
    //   dist: {
    //
    // //     files:  {'./SASS/style.sass';}{'./build/CSS/sass.css';}
    //         }
    //       }


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask("default", ['concat', "watch"]);
  grunt.registerTask('speak', function() {
    console.log("im speaking");
  });

};
