GetCommentsUsage = function() {
  Meteor.call('getCommentsUsage', function(err, result) {
    if(err) {
      throw new err;
    } else {
      console.log(result);
    }
  });
};