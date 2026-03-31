var valor1 = 0;
console.log('antes do timeout');

var prosseId =  setInterval(() => {
    
    valor1 = 5;
    console.log(`estou correndo da vaca ${valor1} `);
}, 100);
    
console.log('depois');
console.log(`valor da variavel = ${valor1}`);


/*setTimeout(() => {
    clearInterval( clearInterval(prosseId) > console.log(`depois do loop ${valor1}`));
}, 5000);
*/

setTimeout(() => {
    clearInterval(prosseId);
}, 5000);
