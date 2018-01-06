// ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var aterrizado = false;
var sinfuel = false;
var dificultad = null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 60;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var aux = false;
var deviceWidth = window.innerWidth; // para setear la resolución



//al cargar por completo la página...
window.onload = function () {

	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");
	//para la version desktop
	velocidad1 = document.getElementById("velocidad1");
	altura1 = document.getElementById("altura1");
	combustible1 = document.getElementById("fuel1");




	//Sin Gasolina
	if (combustible == 0 || combustible1 == 0) {
		sinfuel = true;
	}

	//definición de eventos



	//mostrar menú móvil
	document.getElementsByClassName("mostrar")[0].onclick = function () {
		if (aux) {

			document.getElementById("menu").style.display = "none";

			aux = false;
			start();

		} else {
			document.getElementById("menu").style.display = "block";
			document.getElementById("left").style.position = "static";
			aux = true;
			stop();
		}
	}
	document.getElementsByClassName("mostrar")[1].onclick = function () {
		if (aux) {

			document.getElementById("menu").style.display = "none";
			document.getElementById("left").style.position = "relative";
			aux = false;
			start();

		} else {
			document.getElementById("menu").style.display = "block";
			aux = true;
			stop();
		}
	}

	//encender/apagar al apretar/soltar una tecla

	if (deviceWidth > 720) {
		document.onkeydown = function (event) {
			if (event.keyCode == 32 && aterrizado == false) {
				motorOn()
			};
		}
		document.onkeyup = function (event) {
			if (event.keyCode == 32 && aterrizado == false) {
				motorOff()
			};
		}
	} else {
		if (deviceWidth < 720) {
			document.onclick = function () {
				var eTouch = document.body;
				eTouch.addEventListener('touchstart', function (event) {
					//Comprobamos si hay varios eventos del mismo tipo
					if (event.targetTouches.length == 1) {
						var touch = event.targetTouches[0];
						// con esto solo se procesa UN evento touch
						if (aterrizado == false) {

							motorOn();


						}


					}

				}, motorOff());


			}
		}
	}



}


//Definición de funciones

function seleccionar_Dificultad() {
	stop()
	document.getElementById('enviar').onclick = function () {
		if (document.getElementById('facil').checked) {
			dificultad = document.getElementById('facil').value;
		} else if (document.getElementById('medio').checked) {
			dificultad = document.getElementById('medio').value;
		} else if (document.getElementById('dificil').checked) {
			dificultad = document.getElementById('dificil').value;
		}
		document.getElementById("cont").style.display = 'none';
		start();
	}

}

function start() {
	//cada intervalo de tiempo mueve la nave
	timer = setInterval(function () {
		moverNave();
	}, dt * 1000);
}

function stop() {
	clearInterval(timer);
}

function moverNave() {
	//cambiar velocidad y posicion
	v += a * dificultad * dt;
	y += v * dt;
	//actualizar marcadores
	velocidad.innerHTML = v.toFixed(2);
	altura.innerHTML = (70 - y).toFixed(0);
	//actualizar marcadores desktop
	velocidad1.innerHTML = v.toFixed(2);
	altura1.innerHTML = (70 - y).toFixed(0);

	//Distinguir entre mmovil y desktop
	if (deviceWidth > 720) {

		//mover hasta que top sea un 70% de la pantalla
		if (y < 70) {
			document.getElementById("nave").style.top = y + "%";
		} else {
			if (v < 5) {
				document.getElementById("objeto").src = "img/nave.png";
				document.getElementById("objeto").style.height = 100 + '%';
				stop();

				aterrizado = true;
				setTimeout(function () {
					alert('Has Ganado')
				}, 0500);
			} else {
				document.getElementById('nave').style.top = 70 + '%';
				document.getElementById("objeto").src = "img/explosion5.gif";
				stop();
				aterrizado = true;
				setTimeout(function () {
					alert('Game Over')
				}, 2000);
			}
		}
	} else {
		if (y < 77) {
			document.getElementById("nave").style.top = y + "%";
		} else {
			if (v < 5) {
				document.getElementById("objeto").src = "img/nave.png";
				document.getElementById("objeto").style.height = 100 + '%';
				stop();
				aterrizado = true;
				setTimeout(function () {
					alert('Has Ganado')
				}, 0500);
			} else {
				document.getElementById('nave').style.top = 77 + '%';
				document.getElementById("objeto").src = "img/explosion5.gif";
				stop();
				aterrizado = true;
				setTimeout(function () {
					alert('Game Over')
				}, 2000);
			}
		}
	}
}

function motorOn() {
	document.getElementById("objeto").src = "img/nave.gif";
	document.getElementById("objeto").style.height = 130 + '%';

	if (aterrizado || sinfuel) {
		motorOff();



	} else {
		//el motor da aceleración a la nave
		a = -g;

		//mientras el motor esté activado gasta combustible
		if (timerFuel == null)
			timerFuel = setInterval(function () {
				actualizarFuel();
			}, 10);
	}
}


function motorOff() {
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	if (aterrizado == false) {
		document.getElementById("objeto").src = "img/nave.png";
		document.getElementById("objeto").style.height = 100 + '%';
	}
}

function actualizarFuel() {
	//Restamos combustible hasta que se agota
	c -= 0.1;
	if (c < 0 || aterrizado || sinfuel) {
		motorOff();
		c = 0;

	} else {
		combustible.innerHTML = c.toFixed(0);
		combustible1.innerHTML = c.toFixed(0);
	}


}