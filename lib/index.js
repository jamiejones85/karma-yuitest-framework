var path = require('path')

var createPattern = function (pattern, included) {
  return {pattern: pattern, included: included, served: true, watched: false}
}

var initYuiTest = function (files) {
  var yuitestPath = path.dirname(require.resolve('yui'))
  files.unshift(createPattern(yuitestPath + '/**/*.js', false))
  files.unshift(createPattern(yuitestPath + '/yui/yui-min.js', true))
  files.unshift(createPattern(path.join(__dirname, '/adapter.js')))
}

initYuiTest.$inject = ['config.files']

module.exports = {
  'framework:yuitest': ['factory', initYuiTest]
}
