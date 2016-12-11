$(document).ready(function(){
			//stuff
		});
		
		var mode = "visu";

		function opendivchat(){
			var input = $('.div-chat input').val();
			if(input.length >= 1){
				$('.div-chat-pseudo').show();
			}else{
				$('.div-chat-pseudo').hide();
			}
		}
		
		function modifierProfil(){
			if(mode === "visu"){
				enableForm();
			}else if(mode === "modif"){
				if(checkForm()){
					validateForm();
				}
			}
			return false;
		}
		
		function checkForm(){
			return true;
		}
		
		function validateForm(){
			mode = "visu";
			$(".form-input").each(function () {
				$(this).attr('disabled', 'disabled');
			});
			$("#modif-profil").text("Modifier le profil");
		}
		
		function enableForm(){
			mode = "modif";
			$(".form-input").each(function () {
				$(this).removeAttr('disabled');
			});
			$("#modif-profil").text("Valider");
		}
		
		function sendMessage(id){
			var chat = $(".chat-"+id);
			var message = chat.find(".chat-text").val();
			if(message !== ""){
				chat.find(".chat-text").val("");
				console.log(message);
				var p = $("<p>", {"class" : "chat-message send"});
				var text = $("<span>", {"class" : "ml-10", "text" : message});
				var icon = $("<span>", {"class": "glyphicon glyphicon-user"});
				p.append(icon, text);
				chat.find(".chat-history").append(p);
			}
		}
		
		var nbchatopen = 0;
		
		function closeChat(id){
			$(".chat-"+id).hide();
			nbchatopen--;

			$chatsOpen = $(".chat:visible");

			var curPos = $(".chat-"+id).css("right");

			$chatsOpen.each(function(){
				var idChat = $(this).data("id");
				var pos = $(".chat-"+idChat).css("right");
				pos = pos.substring(0, pos.length-2);
				if(pos > curPos){
					$(".chat-"+idChat).css("right", (parseInt(pos)-210)+"px");
				}
			});
		}
		
		function openChat(name, id){
			var chat = $(".chat-"+id);
			if(chat.length == 0){
				nbchatopen++;
				var clone = $(".chat-model").clone();
				clone.removeClass("chat-model");
				clone.addClass("chat-"+id);
				clone.find(".chat-name").text(name);
				clone.css("right", (nbchatopen*210)+"px");
				clone.find(".chat-button-close").on("click", function(){
					closeChat(id);
				});
				clone.find(".chat-button").on("click", function(){
					sendMessage(id);
				})
				clone.data("id", id);
				$("footer").append(clone);
			}else{
				if(chat.eq(0).css("display") === "none"){
					nbchatopen++;
					chat.eq(0).css("right", (nbchatopen*210+"px"));
					chat.eq(0).show("progress");
				}
			}
		}
	