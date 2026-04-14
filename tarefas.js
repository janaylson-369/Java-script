let numeros =[1,2,3,4,5,6,7,8,9,10];

const [p,s,t,q,...itens] = numeros;

let  pessoa = {
    nome: 'João',
    sobrenome: 'Silva'
    
};

let pessoasNomeCompleto = pessoa.map((pesso) => { return {...pesso ,pessoasNomeCompleto: `${pessoa.nome} ${pessoa.nome}`}})


let numerosqt = numeros.map( (item, indice) => { return [(item * q * q* q), itens]});

var mensagem = () => {
    console.log('Array ----------------------->')
    console.log(numerosqt);
    document.getElementById('valor');
};

mensagem();


