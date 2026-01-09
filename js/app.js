function registrar(){
    let mensaje = ''
    if (document.getElementById('nombre_usuario').value.length < 3 || document.getElementById('nombre_usuario').value.length > 20){
        mensaje = mensaje + ' el campo nombre no puede tener una longitud menor de 3 y menor de 20 caracteres'
    } if(document.getElementById('edad').value < 18 ) {
        mensaje = mensaje + ' eres menor de edad'
    }

    if (mensaje.length > 0){
        alert(mensaje)
    } else {
        window.location.href = 'perfil.html'
    }
}