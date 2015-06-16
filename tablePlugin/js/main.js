var data = [
  {
    login: "mojombo",
    id: 1,
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    type: "User",
    site_admin: false
  },
  {
    login: "defunkt",
    id: 2,
    gravatar_id: "",
    url: "https://api.github.com/users/defunkt",
    type: "User",
    site_admin: true
  },
  {
    login: "pjhyett",
    id: 3,
    gravatar_id: "",
    url: "https://api.github.com/users/pjhyett",
    type: "User",
    site_admin: true
  },
  {
    login: "wycats",
    id: 4,
    gravatar_id: "",
    url: "https://api.github.com/users/wycats",
    type: "User",
    site_admin: false
  }
];

$(document).ready(function() {
  var $table = $("<table class='table'><thead id='table-head'> <tr> </tr> </thead> <tbody id='table-body'> </tbody> </table>");

  var userKeys = Object.keys(data[0]);
  var $headers = userKeys.map(function(e, i) {
    return $("<th>", { text: e, class: "header" })
  });

  $table.find("thead tr").html($headers);

  var $rows = data.map(function(user) {
    var $rowData = userKeys.map(function(key, i) {
      return $("<td>", { text: user[key], class: "data-value" })
    });
    return $("<tr></tr>").html($rowData);
  });

  $table.find("tbody").html($rows);

  $("#container").html($table);
});