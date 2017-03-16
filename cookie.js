function writeCookie(name, value, days) {
// Por padrão, não há expiração. Então o cookie é temporario

	var expires = ''

//Especificar um numero de dias torna o cookie persistente

	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 *  1000));
		expires = "; expires-" + date.toGMTString();
	}

// Atribua nome, valor e data de validade ao cokie 
	document.cookie = name + "=" + value + expires + "; path=/";
};


function readCookie(name) {
// Busque o cookie especificando e retorne seu valor 

	var  searchName = name + "=";
	var cookies = document.cookie.split(';');

	for (var i=0; i < cookies.length; i++) {
		var c = cookies[i];
	
		// DA PRA TROCAR ISSO POR REPLACE(' ',"") TROCAR A STRING VAZIA POR NADA. 
		while (c.charat(0) == '  ')
			c = c.substring(1, c.length);
		
		if(c.indexOf(searchName) == 0)
			return c.substring(searchName.length, c.length);	
	};
	return null
};	

function eraseCookie(name){
	// Apague o cookie especificado
	writeCookie(name, "", -1 )
}





