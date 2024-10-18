import fs from 'fs'; 

// Leer un archivo de manera asíncrona 
fs.readFile('./data/ejemplo.txt', 'utf8', (err, data) => { 
}); 

if (err) throw err; 
console.log('Contenido del archivo:', data); 

// Escribir en un nuevo archivo 
fs.writeFile('./data/nuevo-archivo.txt', 'Contenido nuevo', (err) => { 
if (err) throw err; 
console.log('Archivo creado y escrito'); 
}); 

// Renombrar un archivo 
fs.rename('./data/nuevo-archivo.txt', './data/renombra-archivo.txt', (err)  => {

if (err) throw err; 
console.log('Archivo renombrado'); 
}); 
