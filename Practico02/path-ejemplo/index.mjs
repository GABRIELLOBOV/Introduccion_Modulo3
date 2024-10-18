import path from 'path';

const filePath = '.Practico02/ejemplo.txt';

const dirName = path.dirname(filePath);
console.log('Directorio base:' , dirName);

const baseName = path.basename(filePath, 'txt');
console.log('Nombre del archivo base:', baseName);

const extName = path.extname(filePath);
console.log('Extension del archivo:' , extName);

const newPath = path.join('/Users' , '/Usuario' , 'Documents', 'Modulo3' , 'Practico02' , 'nuevo-archivo.txt');
console.log('Nueva ruta:', newPath);

