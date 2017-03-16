function writeCookie(name, value, days) {
// Por padrão, não há expiração. Então, o cookie é temporario
var expires = " ";

// Especificar um numero de dias torna o cokie persistente
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
}


function greetUser() {
	if(navigator.cookieEnabled)
	userName = readCookie("irock_username");
	if(userName)
		alert("Ola" + userName + ", senti dua falta.");
	else
		alert('Olá, eu sou sua rocha de estimação');
}


function touchRock() {
	var userName; 
	
	if(userName) {
		alert("Eu gosto de atencão, " + userName + " Obrigado.");
	} 
	else {
		userName = prompt("Qual é o seu nome ?", "Digite seu nome aqui.");
		if(userName) {
			alert("Bom conhecer voce, " + userName + ".");
			if(navigator.cookieEnabled)
				writeCookie("irock_username", userName, 5 * 365);
			else
				alert("Sorry Cookies arent supported/enabled in your browser Iwont remember you later");
		}
	}

	document.getElementById('rockImg').src = "rock_happy.png";
	// Time or Timer
	setTimeout("document.getElementById('rockImg').src = 'rock.png';", 1 * 60 * 1000)
}	



function resizeRock(){
	document.getElementById("rockImg").style.height = (document.body.clientHeight - 100) * 0.9;
}






