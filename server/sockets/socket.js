const { io } = require('../server');
const {TicketControl} = require('../../classes/ticket-control');

const ticketControl =  new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguienteTicket();
        console.log(siguiente);
        callback(siguiente);
    });

    //Emitir evento estadoActual
    client.emit('estadoActual', {actual: ticketControl.getUltimoTicket(), ultimos4: ticketControl.getUltimos4()});

    //Atender el ticket
    client.on('atenderTicket', (data, callback) => {

        if(!data.escritorio) return callback({err: true, mensaje: 'Escritorio es necesario'});

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        //enviar broadcast
        client.broadcast.emit('estadoActual', {actual: ticketControl.getUltimoTicket(), ultimos4: ticketControl.getUltimos4()});

        callback(atenderTicket);
    });
});
