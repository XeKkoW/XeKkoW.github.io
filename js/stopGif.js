//help with these website
//https://openclassrooms.com/forum/sujet/changer-volume-de-depart-balise-lt-audiogt-html5-30408
//https://www.developpez.net/forums/d1526593/javascript/general-javascript/arreter-fond-sonore-lors-d-scroll-lors-d-click/
//https://www.codegrepper.com/code-examples/javascript/javascript+change+background+image

//java script with a fonction to stop the gif on the home page and to stop the music on the home page
setTimeout(changeBg,7000);

function changeBg(){
	document.getElementById('changeBg').setAttribute("style","background-image: url(img/background1.png);") ;
}

setTimeout(stopZic,2040000)
var monElementAudio = document.getElementById('zic');
	monElementAudio.volume = 0.02;

function stopZic(){
	var audio = document.getElementById('zic');
	audio.addEventListener("click", audio.pause, false);
}
