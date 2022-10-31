function actual() {
    fecha=new Date(); //Actualizar fecha.
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual
    if (hora<10) { //dos cifras para la hora
       hora="0"+hora;
       }
    if (minuto<10) { //dos cifras para el minuto
       minuto="0"+minuto;
       }
    if (segundo<10) { //dos cifras para el segundo
       segundo="0"+segundo;
       }
    //ver en el recuadro del reloj:
    miReloj = hora+" : "+minuto+" : "+segundo;	
            return miReloj; 
    }
function actualizar() { //función del temporizador
miHora=actual(); //recoger hora actual
miReloj=document.getElementById("reloj"); //buscar elemento reloj
miReloj.innerHTML=miHora; //incluir hora en elemento
}
setInterval(actualizar,1000); //iniciar temporizador