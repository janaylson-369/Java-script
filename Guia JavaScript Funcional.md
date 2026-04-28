# **🚀 Guia Completo: JavaScript Funcional e Moderno**

Este guia consolida os conceitos fundamentais de manipulação de Arrays (map, filter, reduce) integrados com as funcionalidades de **Desestruturação** e **Spread/Rest**, baseando-se nas referências do W3Schools e em exercícios comuns de processos seletivos.

## **📌 1\. Filter: A Peneira de Dados**

O método filter() percorre o array e retorna um **novo array** contendo apenas os elementos que satisfazem uma condição lógica. Ele não altera o array original.

**💡 Dica:** Com a desestruturação, podemos extrair a propriedade necessária diretamente no argumento da função, deixando o código mais limpo.

const produtos \= \[  
    { nome: 'Laptop', preco: 1200, categoria: 'Tech' },  
    { nome: 'Teclado', preco: 80, categoria: 'Tech' },  
    { nome: 'Livro', preco: 25, categoria: 'Educação' }  
\];

// Filtrando apenas produtos 'Tech' usando desestruturação no parâmetro  
const eletronicos \= produtos.filter(({ categoria }) \=\> categoria \=== 'Tech');

console.log(eletronicos);   
// Resultado: \[ { nome: 'Laptop', ... }, { nome: 'Teclado', ... } \]

## **🔄 2\. Map: A Transformação**

O método map() cria um **novo array** com os resultados da aplicação de uma função em cada elemento do array original. O tamanho do array retornado é sempre igual ao original.

**💡 Dica:** Utilize o *Spread Operator* (...) dentro do map para adicionar ou modificar propriedades mantendo a imutabilidade do objeto original.

// Adicionando um desconto de 10% em cada produto  
const produtosComDesconto \= produtos.map(item \=\> ({  
    ...item, // Espalha as propriedades originais (nome, preco, categoria)  
    precoComDesconto: item.preco \* 0.9 // Adiciona a nova propriedade  
}));

console.log(produtosComDesconto);

## **🧮 3\. Reduce: O Acumulador**

O reduce() reduz o array a um **único valor final** (que pode ser um número, string, objeto ou outro array). É o método mais flexível e poderoso.

const precos \= \[10, 20, 30, 40\];

// Somando todos os valores  
// acc \= acumulador (começa em 0), valor \= item atual do loop  
const total \= precos.reduce((acc, valor) \=\> acc \+ valor, 0);

console.log(total); // Resultado: 100

## **🔗 4\. Integração Total: Cenário Real (Code Exercises)**

Em seleções, é comum exigir a combinação de todos esses métodos em uma única cadeia de operações (*chaining*).

### **🎯 Desafio: Processamento de Dados de Usuários**

Temos uma lista de usuários e precisamos:

1. Filtrar apenas os usuários **ativos** (filter).  
2. Remover a senha por segurança e adicionar uma flag VIP (map \+ rest/spread).  
3. Calcular a soma de pontos dos usuários ativos (reduce).

const usuarios \= \[  
    { id: 1, nome: 'Hugo', pontos: 150, ativo: true, senha: '123' },  
    { id: 2, nome: 'Ana', pontos: 80, ativo: true, senha: '456' },  
    { id: 3, nome: 'Luís', pontos: 200, ativo: false, senha: '789' }  
\];

// 1 e 2: Encadeamento com Filter, Map e Rest/Spread Operator  
const processados \= usuarios  
    .filter(({ ativo }) \=\> ativo) // Mantém apenas os ativos  
    .map(({ senha, ...resto }) \=\> ({   
        ...resto, // Espalha tudo, exceto a senha (que foi isolada)  
        vip: resto.pontos \> 100 // Nova regra de negócio  
    }));

// 3: Calculando total de pontos usando Reduce com Desestruturação  
const totalPontos \= processados.reduce((acc, { pontos }) \=\> acc \+ pontos, 0);  
const media \= totalPontos / processados.length;

console.log('Usuários Processados:', processados);  
/\*  
\[  
  { id: 1, nome: 'Hugo', pontos: 150, ativo: true, vip: true },  
  { id: 2, nome: 'Ana', pontos: 80, ativo: true, vip: false }  
\]  
\*/  
console.log('Média de Pontos:', media); // Resultado: 115

## **🛠️ 5\. Resumo Rápido de Sintaxe Moderna**

| Operação | Como era feito (Legado) | Como fazer (Moderno / ES6+) | Vantagem |
| :---- | :---- | :---- | :---- |
| **Desestruturação** | array.map(u \=\> u.nome) | array.map(({ nome }) \=\> nome) | Código mais limpo e direto. |
| **Adicionar em Objeto** | item.novo \= true; return item; | return { ...item, novo: true }; | Mantém a imutabilidade (não altera o original). |
| **Remover Propriedade** | delete obj.senha; | const { senha, ...resto } \= obj; | Evita o uso do delete, que causa mutação. |

## **📚 Referências de Estudo**

* **W3Schools:** Referência base para a sintaxe da API Array.prototype.  
* **Conhecendo map(), filter() e reduce() em JavaScript:** Leitura complementar sobre fluxo funcional.  
* **Map, Filter, Reduce \- Code Exercises:** Prática de encadeamento (*chaining*) voltada para entrevistas de código.