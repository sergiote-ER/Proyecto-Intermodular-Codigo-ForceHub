function registrar(){
   let mensaje = ''
   let mensajeError = document.getElementById("mensajeError")
   let nombre_usuario = document.getElementById("nombre").value
   let objetivo = document.getElementById("objetivo").value
   let edad = document.getElementById("edad").value
   let apellidos_usuario = document.getElementById("apellidos").value

   if(nombre_usuario.length<3 || nombre_usuario.length>20){
      mensaje = mensaje + "<p class=mensajeError>'><strong>El nombre debe tener entre 3 y 20 caracteres</p>"
   }     
   if(objetivo.length<10 || objetivo.length>200){
      mensaje = mensaje + "<p class=mensajeError>'><strong>El objetivo debe tener entre 10 y 200 caracteres</p>"
   }          
   if(edad<1 || edad>100){
      mensaje = mensaje + "<p class=mensajeError>'><strong>La edad debe estar entre 1 y 120</p>"
   }
      if(apellidos_usuario.length<3 || apellidos_usuario.length>30){
         mensaje = mensaje + "<p class='mensajeError'><strong>Los apellidos deben tener entre 3 y 30 caracteres</strong></p>"
      }     
         mensajeError.innerHTML = mensaje
   }if(mensaje === ''){}
            
function modoOscuro() {
   document.body.classList.toggle('oscuro');
   if (document.body.classList.contains('oscuro')) {
      document.getElementById('cambiarModo').src = '/img/modo-claro.png';
   } else {
      document.getElementById('cambiarModo').src = '/img/modo-oscuro.png';
   }
}

/*function init(){
   let iconoOscuro = document.getElementById('cambiarModo')
   iconoOscuro.src = '/img/modo-claro.png'
}*/