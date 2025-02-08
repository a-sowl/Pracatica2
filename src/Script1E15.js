// Declaración de  variables

let capitalInicial = 1000; // Capital inicial 
let tasaInteres = 16; // Tasa de interés anual en porcentaje
let tiempo = 3; // Años de inversión

// Calculo del interés simple

let interes = (capitalInicial * tasaInteres * tiempo) / 100;
let total = capitalInicial + interes;

// Resultados en la consola

console.log(`Interés generado después de ${tiempo} años: $${interes}`);

console.log(`Total del capital después de ${tiempo} años: $${total}`);