'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 80 
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path:'/', 
        handler: function (request, reply) {
                reply.file('./appappappapp.html');
            }
    });
     server.route({
        method: 'GET',
        path:'/sound', 
        handler: function (request, reply) {
                reply.file('./Recording.m4a');
            }
    });
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});