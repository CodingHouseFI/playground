var ref = new Firebase("https://torrid-heat-146.firebaseio.com/chat");

ref.authWithOAuthPopup("github", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    initChat(authData.github);
  }
}, {scope: 'user'});

var $messageTemplate = $(".text:first");

var initChat = function(user) {
  $("textarea").on("keyup", function(event) {
    if (event.which !== 13 || event.shiftKey) {
      var $messageDiv = $messageTemplate.clone().removeClass("hidden").addClass("preview");
      $messageDiv.find(".time").text(moment(Date.now()).format("lll"));
      $messageDiv.find(".author").text(user.displayName);
      $messageDiv.find(".message").html(marked(this.value));
      $messageDiv.find(".avatar").attr("src", user.cachedUserProfile.avatar_url);
      $("#preview").html($messageDiv);
    } else {
      sendMessage(this.value);
      this.value = "";
    }
    if (this.value === "") {
      $("#preview").empty();
    }
  });

  var sendMessage = function(textValue) {
    if (textValue) {
      ref.push({
        author: user,
        message: textValue,
        messageDate: Firebase.ServerValue.TIMESTAMP
      });
    }
  };

  ref.on("child_added", function(snapshot){
    var newMessage = snapshot.val();
    if (newMessage.author && newMessage.message && newMessage.message.trim().length > 0){
      var $messageDiv = $messageTemplate.clone().removeClass("hidden")
      $messageDiv.find(".time").text(moment(newMessage.messageDate).format("lll"));
      $messageDiv.find(".author").text(newMessage.author.displayName || newMessage.author.email );
      $messageDiv.find(".message").html(marked(newMessage.message));
      $messageDiv.find(".avatar").attr("src", newMessage.author.cachedUserProfile.avatar_url);
      $("#chat").prepend($messageDiv);
    }
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
