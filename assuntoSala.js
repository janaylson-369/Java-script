// assuntos da aula:  reduce, map, filter e flat

const numeros = [1,-4, 12, 0, -3, 29, -150];

let numerosPositivos = numeros.filter((numero) => {
    return numero >= 0;
});

console.log(numerosPositivos);

let soma = numerosPositivos.reduce((acumulado, numeroPositivo)=> {
    return acumulado + numeroPositivo;
}, 0
);
console.log(`--------------------\n\n ${soma}`);

const notas = [7,8,9,10];


let media = notas.reduce((acumulado, numeroNotas) => {
    return (acumulado + numeroNotas) 
}, 0) / notas.length;



console.log(`--------------------\n\n ${media}`);


const produtos = [
    { id: 1, nome: 'camisa', preco: 100, qtd: 1},
    { id: 2, nome: 'camisa', preco: 100, qtd: 1},
    { id: 3, nome: 'camisa', preco: 100, qtd: 1},
    { id: 4, nome: 'camisa', preco: 100, qtd: 1},
    
];

const relatorio = produtos.filter((produto) => produto.preco > 0).reduce(
    (acumulador, produto) => {
        acumulador.totalItens += produto.qtd;

        acumulador.valorTotal 
    }, {totalItens: 0, valorTotal: 0  }
);





const input = [
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
];

input.flat().reduce((acumu, curretValue) => {
    if (acumu[curretValue]){
        acumu[curretValue] += 1;
    }else{
        acumu[curretValue] = 1;
    }
    return acumu;
}, {});

