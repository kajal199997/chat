function getBotResponse() {
          var rawText = $("#textInput").val();
          var userHtml = '<li class="mar-btm">'+
    							'<div class="media-right">'+
    								'<img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-circle img-sm" alt="Profile Picture">'+
    							'</div>'+
    							'<div class="media-body pad-hor speech-right">'+
    								'<div class="speech">'+
    									'<a href="#" class="media-heading">You</a>'+
    									'<p>'+ rawText +'</p>'+
    									'<p class="speech-time">'+
    										'<i class="fa fa-clock-o fa-fw"></i> 09:23AM'+
    									'</p>'+
    								'</div>'+
    							'</div>'+
    						'</li>';
          $("#textInput").val("");
          $("#chatbox").append(userHtml);
          $("#chatboxContainer").animate({ scrollTop: $('#chatbox').height()}, 1000);

          $.get("/get", { msg: rawText }).done(function(data) {
            var botHtml = '<li class="mar-btm">'+
    							'<div class="media-left">'+
    								'<img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-circle img-sm" alt="Profile Picture">'+
    							'</div>'+
    							'<div class="media-body pad-hor">'+
    								'<div class="speech">'+
    									'<a href="#" class="media-heading">Bot</a>'+
    									'<p>'+ data +'</p>'
    									'<p class="speech-time">'
    									'<i class="fa fa-clock-o fa-fw"></i>09:23AM'
    									'</p>'
    								'</div>'
    							'</div>'
    						'</li>';
            $("#chatbox").append(botHtml);
            document
              .getElementById("chatbox").scrollTop = document
              .getElementById("chatbox").scrollHeight;

          });
        }

        $("#textInput").keypress(function(e) {
          if (e.which == 13) {
            getBotResponse();
          }
        });

