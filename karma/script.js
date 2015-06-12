var $$ = {
  storeData: function(){
    localStorage["karma.data"] = JSON.stringify(this.data);
  },

  $cloneTemplate: $(".person:first").clone().show(),

  readData: function(){
    this.data = JSON.parse(localStorage["karma.data"]);
  },
  modifyPointsFor: function (index, newPoints){
    this.data[index].points = newPoints;
    this.storeData();
    this.cloner();
  },
  compare: function(a, b){
    return b.points - a.points;
  },
  leaderboard: function() {
    return this.data.sort(this.compare);
  },
  data: [],

  cloner : function(){
    $(".people").empty();

    $(".people").append($$.data.map(function(person, index){
      $oneOfYou = this.$cloneTemplate.clone();
      $oneOfYou.find(".name").text(person.name);
      $oneOfYou.find(".points").attr({value: person.points, id: index});
      return $oneOfYou;
    }));

    $("html").on("dblclick", ".points", function(event){
      $(this).removeClass("remove");
      $(this).attr("disabled", false);
    });

    $("html").on("keypress", ".points", function(event){
      if (event.which === 13){
        var id = $(this).attr("id");
        var points = $(this).val();
        $$.modifyPointsFor(id, points);
      }
    });
  }
}

$(document).ready(function() {
  $$.readData();
  $$.leaderboard();
  $$.cloner();
});



// var data = [
//   { "name": "Sheryl Boughton", "points": 1 },
//   { "name": "Tania Leonian", "points": 1 },
//   { "name": "Loren Barrick", "points": 3 },
//   { "name": "Stanley Liu", "points": 0 },
//   { "name": "Ryan Taylor", "points": 0 },
//   { "name": "Son Truong", "points": 1 },
//   { "name": "Michael Sankovich", "points": 0 },
//   { "name": "Gerald Anekwe", "points": 2 },
//   { "name": "Juan Barragan", "points": 1 },
//   { "name": "Troy Wood", "points": 0 },
//   { "name": "Bonnie So", "points": 0 },
//   { "name": "Collin Webb", "points": 2 },
//   { "name": "Elijah Olegnowicz", "points": 0 },
//   { "name": "Trey Huffine", "points": 1 },
//   { "name": "Sean Blattenberger", "points": 0 },
//   { "name": "Dan Ward", "points": 1 },
//   { "name": "Aliou Maiga", "points": 0 },
//   { "name": "Javier Escobar", "points": 2 },
//   { "name": "Perrin Clark", "points": 1 }
// ];
