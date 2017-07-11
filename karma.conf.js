module.exports = function (config) {
  config.set({
    frameworks: ['yuitest'],

    files: [
      'test/*-tests.js'
    ],

    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    autoWatch: true,

    singleRun: false,

    plugins: [
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      require.resolve('./')
    ]
  })
}
