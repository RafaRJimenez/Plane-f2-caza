$(document).ready(function(){
	var caza = {
    direction : "N",
    x: 0,
    y: 0,
    
    };

	var divGame = $(".game");
	//var arr2D = new Array(9).fill(new Array(9).fill("hey"));
	var arr = new Array;
	createMatrix();
	function createMatrix(){
		var matrix="<table>";
			for (i=0;i<10;i++){
				matrix += "<tr>";
				arr[i] = new Array;
				for (z=0;z<10;z++){	
					arr[i][z] = i + "-" + z	;
					matrix+="<td id='"+i+"-"+z+"'>"+arr[i][z]+"</td>";
				}
				matrix+="</tr>";
			}
		matrix +="</table>";
		divGame.append(matrix);

		arr[0][0]="<img src='media/kaza-N.jpg'>";
		var td = $("#0-0");
		td.html(arr[0][0]);
		//alert(td.html());
	}

	function turnLeft(caza){
		switch(caza.direction) {
		case 'N' :
		caza.direction = 'W'; 
		//arr[caza.x][caza.y]="<img src='media/kaza-W.jpg'>";
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-W.jpg'>");
		//alert(caza.direction);
	 	break;
	 	case 'W' :
		caza.direction = 'S'; 
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-S.jpg'>");
	 	break;
	 	case 'S' :
		caza.direction = 'E';
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-E.jpg'>");
	 	break;
		default:
			caza.direction = "N";
			var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-N.jpg'>");
	 	}

	}


	function turnRight(caza){
		switch(caza.direction) {
		case 'N' :
		caza.direction = 'E'; 
		//arr[caza.x][caza.y]="<img src='media/kaza-W.jpg'>";
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-E.jpg'>");
		//alert(caza.direction);
	 	break;
	 	case 'E' :
		caza.direction = 'S'; 
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-S.jpg'>");
	 	break;
	 	case 'S' :
		caza.direction = 'W';
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-W.jpg'>");
	 	break;
		default:
			caza.direction = "N";
			var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-N.jpg'>");
	 	}

	}


	function moveForward(caza){
		var td = $("#"+caza.x+"-"+caza.y); // removing previous td 
		td.html(""); // removing previous td 
	if (caza.direction == "N") {
		caza.x -=1;
		if (caza.x === -1){
			caza.x = 0;
		}
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-N.jpg'>");
	}
	else if (caza.direction == "W") {
		caza.y -=1;
		if (caza.y === -1){
			caza.y = 0;
		}
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-W.jpg'>");
	}
	else if (caza.direction == "S") {
		caza.x +=1;
		if (caza.x === 10){
			caza.x = 9;
		}
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-S.jpg'>");
	}
	else {
		caza.y +=1;
		if (caza.y === 10){
			caza.y = 9;
		}
		var td = $("#"+caza.x+"-"+caza.y);
		td.html("<img src='media/kaza-E.jpg'>");
	}

	/*
	if (caza.x == -1){
		caza.x = 0;
	} else if (caza.y == -1){
		caza.y = 0;
	}

	if (caza.x == 10){
		caza.x = 9;
	} else if (caza.y == 10){
		caza.y = 9;
	}
	*/

	caza.travelLog.push(caza.x+"-"+ caza.y);
  console.log(caza.x + "-" + caza.y);
}





$(window).keydown(function(e){
  if (e.keyCode == 37) {
    e.preventDefault();
    turnLeft(caza);
  } else if (e.keyCode == 39) {
    e.preventDefault();
    turnRight(caza);
	} else if (e.keyCode == 38) {
    e.preventDefault();
    moveForward(caza);
	}

});



});