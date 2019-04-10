

    // })
    
    // <!--Sending data to server-->
    // $("#test123").on("click", function () {
        $("#submit").on("click", function(event) {
            event.preventDefault();
            alert("button clicked");
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

      console.log("New Friend: ",newFriend);

      // $.post("api/friends", newFriend, function(data) {
      //     if (data) {
      //       alert("Adding friend...")
      //       console.log(data);
      //     }
      //   });
      });
    