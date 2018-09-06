//Comando para establecer conexion

var socket = io();

socket.on('estadoActual', function(res){
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    for(i=0;i<=res.ultimos4.length -1;i++){
        $('#lblTicket'+(i+1)).text('Ticket '+res.ultimos4[i].numero);
        $('#lblEscritorio'+(i+1)).text('Escritorio '+res.ultimos4[i].escritorio);
    }
});
