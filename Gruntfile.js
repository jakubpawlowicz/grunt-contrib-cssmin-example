var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        rebase: true,
        rebaseTo: path.resolve('web/css'),
        sourceMap: true
      },
      target: {
        files: {
          'web/css/styles.min.css': 'web/css/styles.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
