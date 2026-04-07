
let valores1 = [1,2,3];

let valores2 = [];
// atribuição por copia - modelo 1
for (let valor of valores1 ) {
  valores2.push(valor);

};

valores2.push(4);
console.log(valores1);
console.log(valores2);

//atribuição por copia - modelo 2
valores2 = [...valores1];
