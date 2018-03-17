$(document).ready(function(){
	


//$('body > :not(#myDiv)').hide(); //hide all nodes directly under the body
//$('#myDiv').appendTo('body');




$ = jQuery

// en jQuery todo es un objeto 

// tagName 

var paragraph = $("p");

var price = "<p>Only $399.99</p>"
$(".container").append(price);

$(".container").prepend("<p>hola soy un prepend</p>"); // lo inserta antes 


$(".js-pizza")
$(".empanadas")
$("#cookies")
$("[href]")
$("[href = 'www.google.es']")
$('[class]')

$('[data-hook = "coffe donuts"]')
$('[data-hook = "co"]') // también lo coge

$(".list li:odd") // devuelve todos los pares

$(".list li:even") // devuelve todos los impares

//$(".container").before("<p>hola voy antes de container gracias a before()</p>"); // va antes del elemento

$(".container").append("soy append(ice)"); // va al final 

//$(".container").text("<p>Mediante text() me he cargado en el dom</p>") // sobreescribe todo el contenido del container

// .html si interpreta las etiquetas html

$(".container p").empty() // vacia todas las etiquetas html dentro de container

$(".container p").remove() // borra incluso las etiquetas html

$("input").prop("type") // = radio

$("div").prop("class") // = container


$("input").prop("type", "text") 


$("div").prop("class", "container pizza") 


$("div").prop("id", "the-container") 

$("div").hasClass("container")

$(".container").addClass("burger")


$(".container").removeClass("burger")

$(".container").removeClass("pizza")

$(".container").toggleClass("pizza");

$("input").val() /// coge el value 

$(".js-options").val(); // te da el value que está marcado

$(".js-options").val("single2");  // te cambia el value si está dentro de las opciones 

$(".container").hide();

$(".container").toggle();

$(".container").fadeOut();
$(".container").fadeIn();

$(".container").fadeToggle();

$(".container").slideDown()

$(".container").slideUp();

$(".container").slideToggle();

$(".js-pizza").on("click",function(){

});

$(".js-pizza").on("click",alertPizza);

var laPizza = $(".js-pizza");

laPizza.click(alertPizza);

$(".js-pizza").click(fadeameTodoMenosElBoton);

	function fadeameTodoMenosElBoton(e){
		$("section *").not(".js-pizza").fadeToggle(); // no me funciona porque todavía no he creado section
		var currentDOMEelement = $(e.currentTarget); // current target es el div que pincha!!!!! también tira solo con target
		console.log(currentDOMEelement);
		currentDOMEelement.addClass("add-class");
	}

});




//$(document).on("ready",alertMundo);

/*
function alertMundo(e){
		
}


$(document).on("ready", function(){
	alert("hola mundo, la página está cargada por completo");
});

$(document.ready), function(){
	alert("hola mundo, la página está cargada por completo");
});

*/

//$(document).on("ready", alertPizza);

//$(document).ready, alertPizza);

