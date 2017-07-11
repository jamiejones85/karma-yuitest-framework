module.exports = function (config) {
  config.set({
    frameworks: ['yuitest'],

    files: [
      { pattern: 'test/*-tests.js', included: false }
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
