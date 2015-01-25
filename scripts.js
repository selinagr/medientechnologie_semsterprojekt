//Add Content to site

var disziplinenA = $('<ul id="disziplinenA" class="dritteSpalte">'
						+'<li><a id="AdisA">Fechten</a></li>'
						+'<li><a id="AdisB">Gewichtheben</a></li>'
						+'<li><a id="AdisC">Leichtathletik</a></li>'
						+'<li><a id="AdisD">Radsport</a></li>'
						+'<li><a id="AdisE">Ringen</a></li>'
						+'<li><a id="AdisF">Schießen</a></li>'
						+'<li><a id="AdisG">Schwimmen</a></li>'
						+'<li><a id="AdisH">Tennis</a></li>'
						+'<li><a id="AdisI">Turnen</a></li>'
					+'</ul>'
					+'<div class="clearFloat"></div>');

var disziplinenW = $('<ul id="disziplinenW" class="dritteSpalte">'
					+'<li><a id="WdisA">Basketball</a></li>'
					+'<li><a id="WdisB">Bogenschießen</a></li>'
					+'<li><a id="WdisC">Boxen</a></li>'
					+'<li><a id="WdisD">Fechten</a></li>'
					+'<li><a id="WdisE">Fußball</a></li>'
					+'<li><a id="WdisF">Gewichtheben</a></li>'
					+'<li><a id="WdisG">Handball</a></li>'
					+'<li><a id="WdisH">Hockey</a></li>'
					+'<li><a id="WdisI">Judo</a></li>'
					+'<li><a id="WdisJ">Kanurennsport</a></li>'
					+'<li><a id="WdisK">Leichtathletik</a></li>'
					+'<li><a id="WdisL">Moderner Fünfkampf</a></li>'
					+'<li><a id="WdisM">Bahnradrennen</a></li>'
					+'<li><a id="WdisN">Straßenrennen</a></li>'
					+'<li><a id="WdisO">Dressurreiten</a></li>'
					+'<li><a id="WdisP">Vielseitigkeitsreiten</a></li>'
					+'<li><a id="WdisQ">Springreiten</a></li>'
					+'<li><a id="WdisR">Freistil Ringen</a></li>'
					+'<li><a id="WdisS">Ringen</a></li>'
					+'<li><a id="WdisT">Rudern</a></li>'
					+'<li><a id="WdisU">Schießen</a></li>'
					+'<li><a id="WdisV">Kunst/ Turmspringen</a></li>'
					+'<li><a id="WdisW">Schwimmen</a></li>'
					+'<li><a id="WdisX">Wasserball</a></li>'
					+'<li><a id="WdisY">Segeln</a></li>'
					+'<li><a id="WdisZ">Turnen</a></li>'
					+'<li><a id="WdisAA">Volleyball</a></li>'
				+'</ul>'
				+'<div class="clearFloat"></div>');

// Erster Klick

var selina = $("#jahrW");

selina.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#jahrW").toggleClass("hervorheben");
	$("#ortW").toggleClass("hervorheben2");
	//add margin
	$("#jahrW").parent("li").toggleClass('addMargin');
	//box erst leeren
	$('#disziplinen').html('');
	//dann inhalt einfügen
	$('#disziplinen').html(disziplinenW);
	$("#disziplinenW").toggleClass("disziplinenW");
});

var selina = $("#jahrA");

selina.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#jahrA").toggleClass("hervorheben");
	$("#ortA").toggleClass("hervorheben2");
	//add margin
	$("#jahrA").parent("li").toggleClass('addMargin');
	//box erst leeren
	$('#disziplinen').html('');
	//dann inhalt einfügen
	$('#disziplinen').html(disziplinenA);
	$("#disziplinenA").toggleClass("disziplinenA");
});



// Zweiter Klick

var zwei = $("#WdisT");

zwei.click(function(event){
	event.preventDefault();
	//console.log("hello");
	$("#udrudern").toggleClass("udrudern");
	$("#WdisT").toggleClass("hervorheben");

});









