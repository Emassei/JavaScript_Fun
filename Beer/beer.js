
var beer = function(){
	var answer= prompt("Person 1, Do all you want a beer").toUpperCase();

	if(answer === "I DON'T KNOW"){
			var beer = function(){
				var answer = prompt("Person 2, Do all of you want a beer?").toUpperCase();
				if(answer === "I DON'T KNOW"){

					var beer= function(){
						var answer = prompt("Person 3, do all of you want a beer?").toUpperCase();
						if(answer === "YES"){
							alert("We all want a beer!")
						}
						else if(answer ==="NO"){
							alert("No we all don't want a beer.")
						}
						else{
							alert("Type something that makes sense!");
						
						}
					
					}
					beer();
				}
				else if(answer==="NO"){
					alert("no we all don't want a beer")
				}
				else if(answer ==="yes"){
					alert("you don't know your friends!")
				}
				else{
					alert("Type something that makes sense!");
				
				}
			}
			beer();	
	}
	else if (answer==="NO"){
		alert("We all don't want a beer")
	}
	else if (answer ==="yes"){
		alert("You don't know your friends!")
	}
	else{
		alert("Type something that makes sense!")
	}
}

beer();
