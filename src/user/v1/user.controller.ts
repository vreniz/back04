import fs from 'fs';
import path from 'path';

// Ruta del archivo JSON
const jsonFilePath = path.join(__dirname, '/src/user/v1/src/24-taller-04-datos.json');

// Función para leer los usuarios del archivo JSON
function getUsersFromJson() {
  const data = fs.readFileSync(jsonFilePath, 'utf-8');
  return JSON.parse(data);
}

// Función para obtener todos los usuarios
async function readUsers() {
  return getUsersFromJson();
}

// Función para obtener los usuarios por hobby
async function readUsersByHobby(hobby: string) {
  const users = getUsersFromJson();
  return users.filter((user: any) => user.hobbies.includes(hobby));
}

// Exportar las funciones
export { readUsers, readUsersByHobby };
