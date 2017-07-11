YUI({useBrowserConsole: false}).use('test', function (Y) {
  var suite = new Y.Test.Suite("Another Suite of Tests");
  suite.add(new Y.Test.Case({

    testTrueIsTrue: function() {
      Y.Assert.areEqual(true, true);
    },

    testFalseIsFalse: function() {
      Y.Assert.areEqual(false, false);
    }

  }));
  Y.Test.Runner.add(suite);

});
