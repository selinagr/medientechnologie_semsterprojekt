// Erster Klick

var selina = $("#jahrW");

selina.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#disziplinenW").toggleClass("disziplinenW");
	$("#jahrW").toggleClass("hervorheben");
	$("#ortW").toggleClass("hervorheben2");
});

var selina = $("#jahrA");

selina.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#disziplinenA").toggleClass("disziplinenA");
	$("#jahrA").toggleClass("hervorheben");
	$("#ortA").toggleClass("hervorheben2");
});



// Zweiter Klick

var zwei = $("#WdisT");

zwei.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#udrudern").toggleClass("udrudern");
	$("#WdisT").toggleClass("hervorheben");
});






