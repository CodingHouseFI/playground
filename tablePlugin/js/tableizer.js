$.fn.tableizer = function(data) {
  this.each(function(i, e) {
    var $table = $("<table class='table'><thead class='table-head'> <tr> </tr> </thead> <tbody class='table-body'> </tbody> </table>");

    var userKeys = Object.keys(data[0]);
    var $headers = userKeys.map(function(e, i) {
      return $("<th>", { text: e, class: "header", data: { direction: 'asc' }  })
    });

    $table.find("thead tr").html($headers);

    var $rows = data.map(function(user) {
      var $rowData = userKeys.map(function(key, i) {
        return $("<td>", { text: user[key], class: "data-value" })
      });
      return $("<tr></tr>").html($rowData);
    });

    $table.find("tbody").html($rows);


    $table.on("click", "thead th", function() {
      console.log($(this).data("direction"));
      // read the text
      // sort array based on that
      // redraw the table
    });

    $(e).html($table);
  });
};
