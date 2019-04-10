  //Note to self: this is connected to the client-side HTML survey page

    // })
    
    // <!--Sending data to server-->
    // $("#test123").on("click", function () {
        $("#submit").on("click", function(event) {
            event.preventDefault();
        console.log("clicked submit")
      var newFriend = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("option[name='q1']:checked").val(),
          $("option[name='q2']:checked").val(),
          $("option[name='q3']:checked").val(),
          $("option[name='q4']:checked").val(),
          $("option[name='q5']:checked").val(),
          $("option[name='q6']:checked").val(),
          $("option[name='q7']:checked").val(),
          $("option[name='q8']:checked").val(),
          $("option[name='q9']:checked").val(),
          $("option[name='q10']:checked").val(),
        ]
      };

      console.log("Over in app.js with my New Friend: ",newFriend);

      $.post("/api/friends", newFriend)
      .done( function(data) {
          if (data) {
            alert("Adding friend...")
            console.log(data);
            alert("you're match is: " + data.name + " and here is their photo!: " + data.photo);
          }
        });
      });
    