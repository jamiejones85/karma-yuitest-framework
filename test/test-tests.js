YUI({useBrowserConsole: false}).use('test', function (Y) {
  var suite = new Y.Test.Suite("A Suite of Tests");
  suite.add(new Y.Test.Case({
    _should: {
        ignore: {
            testFalseIsFalse: true //ignore this test
        }
    },
    testTrueIsTrue: function() {
      Y.Assert.areEqual(true, true);
    },

    testFalseIsFalse: function() {
      Y.Assert.areEqual(false, true);
    }

  }));
  Y.Test.Runner.add(suite);

});
