var ref = new Firebase("https://torrid-heat-146.firebaseio.com/chat");

$("textarea").on("keyup", function(event) {
  if (event.which === 13) {
    sendMessage(this.value);
    this.value = "";
  }
});

var sendMessage = function(textValue) {
  if (textValue) {
    ref.push({
      author: "Samer",
      message: textValue,
      messageDate: Firebase.ServerValue.TIMESTAMP
    });
  }
};

var $messageTemplate = $(".text:first");

ref.on("child_added", function(snapshot){
  var newMessage = snapshot.val();
  if (newMessage.author && newMessage.message && newMessage.message.trim().length > 0){
    var $messageDiv = $messageTemplate.clone().removeClass("hidden")
    $messageDiv.find(".time").text(moment(newMessage.messageDate).format("lll"));
    $messageDiv.find(".author").text(newMessage.author);
    $messageDiv.find(".message").html(marked(newMessage.message));
    $("#chat").prepend($messageDiv);
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
