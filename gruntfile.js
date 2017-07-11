module.exports = function (grunt) {
  grunt.loadTasks('tasks')
  grunt.initConfig({
    pkgFile: 'package.json',
    build: {
      adapter: ['src/adapter.js']
    },
    karma: {
     adapter: {
       configFile: 'karma.conf.js',
       autoWatch: false,
       singleRun: true,
       reporters: ['dots']
     }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['build', 'karma'])
  grunt.registerTask('default', ['test']);
};
