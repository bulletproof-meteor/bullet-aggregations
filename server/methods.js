Meteor.methods({
  getCommentsUsage: function() {
    var beforeSevenDays = new Date(Date.now() - 1000 * 3600 * 24 * 7);
    var comments = Comments.find({created: {$gt: beforeSevenDays}});
    var results = {};
    comments.forEach(function(comment) {
      var hour = comment.created.getHours();
      if(!results[hour]) {
        results[hour] = 0;
      }
      results[hour]++;
    });

    return results;
  }
});