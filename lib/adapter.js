(function(window) {

'use strict'

function getResults(data) {
  var results = [];
  Object.getOwnPropertyNames(data).forEach(
    function (val) {
      if (typeof data[val] === 'object') {
        results.push(data[val]);
      }
    }
  );
  return results;
};

/**
 * YUI Test starter function factory.
 *
 * This function is invoked from the wrapper.
 * @see  adapter.wrapper
 *
 * @param  {Object}   karma        Karma runner instance.
 * @return {Function}              Karma starter function.
 */
function createStartFn (karma) {
  // This function will be assigned to `window.__karma__.start`:
  return function () {
    var clientConfig = karma.config || {}
    var yuitestConfig = clientConfig.yuitest || {}

    YUI().use('test', function (Y) {


      function handlePassTestResult(data) {
        karma.result(
          {
              id: '',
              suite: [],
              log: [],
              description: data.testName,
              success: true,
              skipped: false
          }
        );
      };



      function handleComplete(data) {
        karma.info({ total: data.results.total, time: data.results.duration });

        var suites = getResults(data.results);
        suites.forEach(function(s) {
          var cases = getResults(s);
          cases.forEach(function(testCase) {
            var tests = getResults(testCase);
            tests.forEach(function(test) {
              karma.result({
                id: testCase.name + test.name,
                suite: [s.name],
                log: test.result === 'fail' ? [test.message] : [],
                description: test.name,
                success: test.result === 'pass',
                skipped: test.result === 'ignore',
                time: 1
              });
            });
          });
        });

        karma.complete();
      };

      var TestRunner = Y.Test.Runner;
      TestRunner.subscribe(TestRunner.COMPLETE_EVENT, handleComplete)
      TestRunner.run();
    });
  }

}

window.__karma__.start = createStartFn(window.__karma__)

})(typeof window !== 'undefined' ? window : global);
