let modo = localStorage.getItem("modo");
let cambiarModo = document.getElementById("cambiarModo")

if (modo === "oscuro") {
   document.body.classList.add("oscuro");
   if (document.getElementById('cambiarModo')) {
      document.getElementById('cambiarModo').src = '/img/modo-claro.png';
   }
} else {
   document.body.classList.remove("oscuro");
   if (document.getElementById('cambiarModo')) {
      document.getElementById('cambiarModo').src = '/img/modo-oscuro.png';
   }
}

document.body.classList.add("visible");

cambiarModo.addEventListener("click", function(){
   document.body.classList.toggle('oscuro');
   if (document.body.classList.contains('oscuro')) {
      document.getElementById('cambiarModo').src = '/img/modo-claro.png';
      localStorage.setItem("modo", "oscuro");
   } else {
      document.getElementById('cambiarModo').src = '/img/modo-oscuro.png';
      localStorage.setItem("modo", "claro");
   }
})

function registrar(){
   let mensaje = ''
   let mensajeError = document.getElementById("mensajeError")
   let nombre_usuario = document.getElementById("nombre").value
   let objetivo = document.getElementById("objetivo").value
   let edad = document.getElementById("edad").value
   let apellidos_usuario = document.getElementById("apellidos").value
   let correo_contacto=document.getElementById("correo_contacto").value
   let asunto=document.getElementById("asunto").value

   if(nombre_usuario.length<3 || nombre_usuario.length>20){
      mensaje = mensaje + "<p class=mensajeError>'><strong>El nombre debe tener entre 3 y 20 caracteres</p>"
   }     
   if(objetivo.length<10 || objetivo.length>200){
      mensaje = mensaje + "<p class=mensajeError>'><strong>El objetivo debe tener entre 10 y 200 caracteres</p>"
   }          
   if(edad<1 || edad>100){
      mensaje = mensaje + "<p class=mensajeError>'><strong>La edad debe estar entre 1 y 100</p>"
   }
      if(apellidos_usuario.length<3 || apellidos_usuario.length>30){
         mensaje = mensaje + "<p class='mensajeError'><strong>Los apellidos deben tener entre 3 y 30 caracteres</strong></p>"
      }     
   }
   if(nick.length<3 || nick.length>20){
      mensaje = mensaje + "<p class='mensajeError'><strong>El nick debe tener entre 3 y 20 caracteres</strong></p>"
   }
   if(email.length<6 || email.length>40){
      mensaje = mensaje + "<p class='mensajeError'><strong>El email debe tener entre 6 y 40 caracteres</strong></p>"
   }
   if(contraseña.length<6 || contraseña.length>70){
      mensaje = mensaje + "<p class='mensajeError'><strong>La contraseña debe tener entre 6 y 70 caracteres</strong></p>"
   }
   if(telefono.length<9 || telefono.length>15){
      mensaje = mensaje + "<p class='mensajeError'><strong>El teléfono debe tener entre 9 y 15 caracteres</strong></p>"
   }
   if(nacimiento.length<5 || nacimiento.length>15){
      mensaje = mensaje + "<p class='mensajeError'><strong>La fecha de nacimiento debe tener entre 5 y 15 caracteres</strong></p>"
   }
   if(sexo === "Hombre" || sexo === "Mujer" || sexo === "Otro"){
      mensaje = mensaje + "<p class='mensajeError'><strong>El sexo debe ser Hombre, Mujer u Otro</strong></p>"
   }
   if(tipo_usuario === "gratuita" || tipo_usuario === "premium"){
      mensaje = mensaje + "<p class='mensajeError'><strong>El tipo de usuario debe ser gratuita o premium</strong></p>"
   }
   if(plan_suscripcion === "mensual" || plan_suscripcion === "trimestral" || plan_suscripcion === "anual"){
      mensaje = mensaje + "<p class='mensajeError'><strong>El plan de suscripción debe ser mensual, trimestral o anual</strong></p>"
   }
   if(pago_metodo === "tarjeta" || pago_metodo === "paypal" || pago_metodo === "transferencia" || pago_metodo === "google_pay" || pago_metodo === "apple_pay"){
      mensaje = mensaje + "<p class='mensajeError'><strong>El método de pago debe ser tarjeta, paypal, transferencia, google_pay o apple_pay</strong></p>"
   }
   if(mensaje === ''){
      alert("Registro completado correctamente");
   }
   if(mensaje.length<10 || mensaje.length>200){
   mensajeError.innerHTML="<p class='mensajeError'><strong>El mensaje debe tener al menos 10 caracteres y no más de 200.</strong></p>"
   }
   if(correo_contacto.length<5 || correo_contacto.length>50){
   mensajeError.innerHTML="<p class='mensajeError'><strong>El correo de contacto debe tener al menos 5 caracteres y no más de 50.</strong></p>"
   }
   if(asunto.length<5 || asunto.length>100){
   mensajeError.innerHTML="<p class='mensajeError'><strong>El asunto debe tener al menos 5 caracteres y no más de 100.</strong></p>"
   }
       mensajeError.innerHTML = mensaje

       saldo.value.length
