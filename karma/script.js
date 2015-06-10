var data = [
  { name: 'Ryan', points: 14 },
  { name: 'Colin', points: 7 },
  { name: 'Tania', points: 9 },
  { name: 'Mike', points: 21 }
];

var sortedData = data.sort(function(a, b){
  return a.points < b.points;
});


$(document).ready(function(){
  var leaders = [];
  var $cloneTemplate = $(".person:first").clone(true).show();

  sortedData.forEach(function(data){
    var $clone = $cloneTemplate.clone();
    $clone.find(".name").text(data.name);
    $clone.find(".points").text(data.points);
    leaders.push($clone);
  });

  $("#leaderboard").append(leaders);
});
