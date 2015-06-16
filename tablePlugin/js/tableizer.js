$.fn.tableizer = function(data) {
  this.each(function(i, e) {
    var $table = $("<table class='table'><thead class='table-head'> <tr> </tr> </thead> <tbody class='table-body'> </tbody> </table>");

    var userKeys = Object.keys(data[0]);
    var $headers = userKeys.map(function(e, i) {
      return $("<th>", { text: e, class: "header", data: { direction: 'asc' }  })
    });

    $table.find("thead tr").html($headers);

    function redrawTheTableBody() {
      var $rows = data.map(function(user) {
        var $rowData = userKeys.map(function(key, i) {
          return $("<td>", { text: user[key], class: "data-value" })
        });
        return $("<tr></tr>").html($rowData);
      });

      $table.find("tbody").html($rows);

      var direction;
      $table.on("click", "thead th", function() {
        var $th = $(this);
        direction = $th.data("direction");
        $th.data("direction", direction === "asc" ? "desc" : "asc");
        var keyForSort = $th.text();
        // data.sortUsing(keyForSort, direction);
        redrawTheTableBody();
      });

      $(e).html($table);
    }

    redrawTheTableBody();
  });
};
