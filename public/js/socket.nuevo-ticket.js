//Comando para establecer conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});


socket.on('estadoActual', function(res){
    label.text(res.actual);
});


$('button').click(function(){

    socket.emit('siguienteTicket', null, function(siguiente){
        label.text(siguiente);
    });
});
