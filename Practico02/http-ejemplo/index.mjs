
import http from 'http';

// Definir la variable 'nombre'
const nombre = 'EQUIPO 12';

// Mostrar el mensaje en la consola
console.log(`¡Hola, ${nombre}!`);

// Crear un servidor HTTP básico
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡HOLA EQUIPO 12!');
});

// Configurar el servidor para que escuche en el puerto 3002
server.listen(3002, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3002/');
});



    