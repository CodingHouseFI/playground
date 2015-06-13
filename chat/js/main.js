var ref = new Firebase("https://torrid-heat-146.firebaseio.com/son");

ref.set({
  author: "Samer",
  message: "Hello World!",
});

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  var newMessage = snapshot.val();
  var messageDiv = $("<div>")
                  .append($("<span>", { class: 'author', text: newMessage.author }))
                  .append($("<span>", { text: newMessage.message }))
  $("#chat").prepend(messageDiv);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
