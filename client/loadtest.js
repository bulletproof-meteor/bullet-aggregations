var startLoadTest = false;
StartLoadTest = function() {
  if(startLoadTest) {
    throw new Error("load test is already started!");
  }

  startLoadTest = true;
  function call() {
    if(startLoadTest) {
      Meteor.call('getCommentsUsage', function(err, result) {
        if(err) throw err;
        call();
      });
    } else {
      console.log("load test stopped!");
    }
  };

  console.log("load test started!");
  call();
};

StopLoadTest = function() {
  startLoadTest = false;
};
