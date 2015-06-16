$.fn.tableizer = function(data) {
  this.each(function(i, e) {
    var $table = $("<table class='table'><thead class='table-head'> <tr> </tr> </thead> <tbody class='table-body'> </tbody> </table>");

    var userKeys = Object.keys(data[0]);
    var $headers = userKeys.map(function(e, i) {
      return $("<th>", { text: e, class: "header", data: { direction: 'asc' }  })
    });

    $table.find("thead tr").html($headers);
    var sortData = {
      asc: { opposite: 'desc', direction: -1 },
      desc: { opposite: 'asc', direction: 1 },
    }
    var directionKey;
    $table.on("click", "thead th", function() {
      var $th = $(this);
      directionKey = $th.data("direction");
      $th.data("direction", sortData[directionKey].opposite);
      var keyForSort = $th.text();
      data.sortUsing(keyForSort, sortData[directionKey].direction);
      redrawTheTableBody();
    });

    $(e).html($table);

    function redrawTheTableBody() {
      var $rows = data.map(function(user) {
        var $rowData = userKeys.map(function(key, i) {
          return $("<td>", { text: user[key], class: "data-value" })
        });
        return $("<tr></tr>").html($rowData);
      });

      $(e).find("tbody").html($rows);
    }

    redrawTheTableBody();
  });
};

// var sortOrder = {
//   asc: { opposite: 'desc', direction: -1 },
//   desc: { opposite: 'asc', direction: 1 },
// }
Array.prototype.sortUsing = function(key, direction) {
  this.sort(function(a,b) {
    if (a[key] === b[key]) {
      return 0;
    }
    return direction * (a[key] > b[key] ? 1 : -1);
  });
}
