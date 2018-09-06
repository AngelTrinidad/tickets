//Comando para establecer conexion

var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
$('h1').text('Escritorio '+ escritorio);

$('button').click(function(){

    socket.emit('atenderTicket', {escritorio: escritorio}, function(res){

        if(res === 'No hay tickets'){
            label.text('Ya no hay tickets');
            alert(res);
            return;
        }

        label.text('Ticket ' + res.numero);

    });
});
