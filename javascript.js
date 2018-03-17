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

		arr[0][0]="<img src='media/kaza-E.jpg'>";
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
 // console.log("turnLeft was called!"); Esto no tira why?????
}

$(window).keydown(function(e){
  if (e.keyCode == 37) {
    e.preventDefault();
    turnLeft(caza);
  }
});



});