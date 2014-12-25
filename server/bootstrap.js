var lastComment = Comments.findOne({}, {
  $sort: {created: 1},
  $limit: 1
});

if(!lastComment || isOldThanAWeek(lastComment)) {
  Comments.remove({});
  var sevenDaysTime = 1000 * 3600 * 24 * 7;
  var beforeSevenDays = new Date(Date.now() - sevenDaysTime);

  console.log("inserting comments");
  for(var lc=0; lc<10000; lc++) {
    if(lc > 0 && lc%1000 == 0) {
      console.log(" added: %s comments", lc);
    }

    var randomTime = Math.ceil(Math.random() * sevenDaysTime);
    var created = new Date(Date.now() - randomTime);
    Comments.insert({created: created, text: Random.id()});
  }
  console.log("completed!");
}

function isOldThanAWeek (comment) {
  var diff = Date.now() - comment.created.getTime();
  return diff > 1000 * 3600 * 24 * 7;
}