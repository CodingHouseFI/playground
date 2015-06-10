$(document).ready(function(){
  $.getJSON("data.json").success(function(response){
    var data = response.data;

    var sortedData = data.sort(function(a, b){
      return a.points < b.points;
    });

    var leaders = [];
    var $cloneTemplate = $(".person:first").clone(true).show();

    sortedData.forEach(function(data){
      var $clone = $cloneTemplate.clone();
      $clone.find(".name").text(data.name);
      $clone.find(".points").text(data.points);
      leaders.push($clone);
    });

    $("#leaderboard").append(leaders);

  }).error(function(error, text, x){
    console.log(error, text, x);
  });
});
