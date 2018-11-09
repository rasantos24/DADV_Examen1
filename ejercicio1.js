const load = require('lodash');
const argv = require('yargs').argv;

var salto = "";

salto += "\r\n";

let nom = {"Nombre": "Rafael"};
let ape = {"Apellido": "Santos"};
let noc = {"No Cuenta": "21221036"}
 
let no = "Rafael";
let ap = "Santos";
let cu = "21221036";

const res = load.assign(nom, ape, noc);

console.log(res);

const fs = require('fs');

fs.appendFile('Examen1.txt', `${salto}Alumno: ${no} ${ap} ${salto}Numero de Cuenta: ${cu}`, (error)=>{
    if(error) console.log(`Error ${error}`);
})
