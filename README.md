# Lunar_Lander_JS_versi-n_final
Repositorio del trabajo final de Lunar Lander, con Javascript

Readme de la Versión Final

- Omitiré poner datos ya explicados en los 2 anteriores proyectos, así como especificar cosas de la plantilla entregada por el profesor.

Introducción:
  - En este último trabajo se aplican las funcionalidades con JS. Se nos entregó una plantilla con las funciones de los marcadores (a expensas de ser arregladas) y la función de activar y desactivar el motor.
  
Variables nuevas añadidas:
 - aterrizado- devuelve booleano si aterriza.
 - sinfuel- devuelve booleano si no tiene fuel.
 - dificultad- Devuelve un valor por el cual se multiplica g subiendo la velocidad.
 - deviceWidth - setea la resolución del dispositivo.
  
Marcadores:
  - Ajustados para que la velocidad sea la correcta, la altitud también y Fuel cambiado para empezar con 60 l.
  
Selector de Dificultad:
  - Al empezar el juego requiere la elección de dificultad, la cual se selecciona con un input y doble click sobre el boton 'seleccionar'.
  - Destacar que he modificado la forma de hacerlo difícil: en lugar de tener menos gasolina, la nave irá mas deprisa teniendo que          aterrizar a la misma velocidad de 5 m/s o menos en todas las dificultades.
  He decidido hacerlo así ya que me parece una forma mas apropiada y divertida de poner difícil el juego.
  
Botón Menú:
  - Al clickar en menú el juego se detiene ofreciendonos cada posibilidad.
  - Tanto 'Acerca de' como 'Instrucciones' nos preguntará si queremos abandonar el juego ya que nos envía a otra página.
  - Para ocultar el menú volvemos a clickar sobre él.
  
Aterrizaje correcto e incorrecto:
 - Añadida animación del los motores en marcha.
 -  Si aterrizamos correctamente aparece un mensaje de felicitación. Reiniciamos el juego desde el menú.
 - Si no conseguimos aterrizar aparece una animación de la nave explotando. Reiniciamos desde el menú.
 - Si se nos acaba el fuel, la nave se apaga, la animación de los motores también se quita.
 - En escritorio utilizamos la 'barra espaciadora'.
 - En versión móvil hacemos clic en cualquier lado de la pantalla.(Mencionar que en esta función me ha ayudado el compañero Mario, ya que yo no era capaz de encontrar como se hacía.)
  
Validación:
  - Como siempre, el HTML y CSS están validados. El JS está validado pero al no encontrar página de W3C lo validé aquí: http://esprima.org/demo/validate.html
    
Imágenes:
  - Comprimidas varias veces y fondos redimensionados para que no ocupen tanto como la última vez.

Versión Min:
  - Realizada una nueva Branch con la versión minificada.
    
  
  
