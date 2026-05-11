**Fase 1**

1\. O que será impresso no console?

```javascript
const lista = [3, 7, 2, 9];
lista.push(5); // O .push() Ele coloca o valor no final da lista.
console.log(lista.length); // O .length conta quantos elementos tem. 
// Como tinha 4 e entrou 1, o resultado é 5.

```

***b) 5***

2\. Qual será o resultado?

```javascript
const frutas = ['maçã', 'banana', 'uva'];
frutas.pop(); // O .pop() ele remove o último elemento.
console.log(frutas); 

```

***c) \['maçã', 'banana'\]***

3\. O que o código exibirá?

```javascript
let numeros = [10, 20, 30, 40];
numeros.shift(); // O .shift() ele remove quem está lá na frente na array é o 10.
console.log(numeros);

```

***a) \[20, 30, 40\]***

4\. O que será impresso?

```javascript

const valores = [1, 2, 3];
valores.unshift(0); // O .unshift() ele adiciona um elemento no inicio da array.
console.log(valores); 
```

***b) \[0, 1, 2, 3\]***

5\. Qual o valor final de resultado?

```javascript
const a = [5, 6, 7];
const b = a.slice(1); // O .slice(1) ele dá uma cópia a partir da posição 1 até o fim.
// Ele não estraga a array original, só tira uma copia daquele pedaço.
console.log(b); 

```

***b) \[6, 7\]***

6\. Qual será o output?
```javascript
const arr = [1, 2, 3, 4];
arr.splice(1, 2); 
/* O .splice() serve para apagar elementos dentro de uma array,
 o funcionamento: o primeiro numero é o ponto de partida para apagar  
 = (1, | o segundo é quantos você quer apagar = ,2)
 Então: começa no '2' (índice 1) e remove 2 itens ('2' e '3')*/
console.log(arr);

```
***b) \[1, 4\]***

7\. Resultado do código:
```javascript
const lista = ['a', 'b', 'c'];
console.log(lista.indexOf('c')); // O .indexOf() ele procura o valor e diz a posição.

```
***c) 2***

8\. O que será mostrado?
```javascript
const itens = [4, 8, 12];
const r = itens.map(x => x / 2); // O .map() é uma fábrica. Ele pega cada item e transforma em algo novo por meio de uma condição definida (x => x / 2).
console.log(r);

```
***b) \[2, 4, 6\]***

9\. Qual será o print?
```javascript
const nums = [3, 6, 9, 12];
const filtrado = nums.filter(n => n > 6); // O .filter() ele filtra dados da array, nesse caso "só passa quem for maior que 6".
console.log(filtrado); 

```
***c) \[9, 12\]***

falta corrigir
10\. O que acontece com o código?
```javascript
const arr = [2, 4, 6];
const soma = arr.reduce((a, b) => a + b, 0); // O .reduce() pega a galera toda e condensa num valor só.
// Ele vai somando: 0+2=2 -> 2+4=6 -> 6+6=12.
console.log(soma); // 12

```
***d) 12***

11\. Resultado impresso:
```javascript
const nomes = ['Ana', 'Lucas', 'Bruna'];
console.log(nomes.includes('Lucas')); // O .includes() é uma pergunta de sim ou não: "Tem Lucas aí?".
// Como tem, ele responde true.

```
***a) true***

12\. Qual será o resultado?
```javascript
const letras = ['a', 'b', 'c'];
console.log(letras.join('-')); // O .join() pega a array e coloca em uma string só, usando o que você quiser pra separar.
// Resultado: "a-b-c".

```
***c) 'a-b-c'***

13\. O que sai no console?
```javascript
let arr = [1, 2, 3];
arr = arr.concat([4, 5]); // O .concat() é o casamento de duas listas. Ele junta as duas numa nova.
console.log(arr); // [1, 2, 3, 4, 5]

```
***c) \[1, 2, 3, 4, 5\]***

14\. Qual é o resultado?
```javascript
const lista = ['x', 'y', 'z'];
console.log(lista.reverse()); // O .reverse() simplesmente capota a array. O último vira primeiro.

```
***b) \['z', 'y', 'x'\]***

15\. O que será impresso?
```javascript
const dados = [1, 2, 3, 4];
const r = dados.find(n => n > 2); // O .find() é preguiçoso. Ele quer o PRIMEIRO que satisfaça a regra.
// O 3 é maior que 2? Sim. Então ele para ali mesmo e ignora o 4.
console.log(r); // 3

```
***c) 3***  

**Fase 2**

16\. Explique passo a passo o funcionamento e o resultado do seguinte código:  
```javascript
const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);
```
  
***RESPOSTA:***

primeiro vai filtrar se o número é ímpar ele passa, o map vai multiplicar por 3  e colocar esse valor em uma nova array por último o reduce vai acumular o resultado com o ponto de partida sendo 10 (10 \+3 \+9 \+15  \= 37), o resultado de saída vai ser 37\.

17\. Reescreva o seguinte código sem usar map, filter ou reduce, apenas laços e condicionais:  
```javascript
const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
})).reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado);
```


***RESPOSTA:***
```javascript
const arr = [10, 15, 22, 34, 45, 60];
let guardar = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    guardar += arr[i] / 2;
  }
}

console.log(guardar); 
```

18\. O código abaixo modifica o array original. Explique o motivo e proponha duas formas de   
evitar essa mutação:  
```javascript
const lista = [4, 8, 12, 16];
const r = lista.splice(1, 2);
console.log(lista, r);
```

***RESPOSTA:***  
o motivo é porque está usando o método splice(), ele modifica a array original.  
formas de evitar isso:  
1: 
```javascript  
const lista = [4, 8, 12, 16];
const r = lista.toSpliced(1, 2); 

console.log(lista);     
console.log(r); 
```

2:   
```javascript
const lista = [4, 8, 12, 16];
const [...listacopia] = lista;
const r = listacopia.splice(1, 2);
console.log(lista, r);
```

19\. Explique como agrupar elementos de um array de objetos pela propriedade 'cidade'   
usando apenas métodos de array:  
```javascript
const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ];
```
 
***RESPOSTA:***
```javascript
const pessoas = [{ nome: 'Ana', cidade: 'SP' },
{ nome: 'Lucas', cidade: 'RJ' },{ nome: 'Bruna', cidade: 'SP' },{ nome: 'Caio', cidade: 'MG' }
];

const agrupar = pessoas.reduce((acc, pessoa) => {
    const { cidade } = pessoa;
    return {...acc,
       [cidade]: (acc[cidade] || []).concat(pessoa)};
}, {});
console.log(agrupar);
```

20\. Detalhe a diferença entre os métodos find, filter e some analisando o código:  

```javascript
const valores = [5, 8, 12, 8, 3];
const a = valores.find(v => v === 8);
const b = valores.filter(v => v === 8);
const c = valores.some(v => v === 8);
console.log(a, b, c);
``` 


***RESPOSTA:***

``find()``: é parecido do o método filter() porém ele só retorna o primeiro elemento que ele encontrar [ 8 ]  

``filter()``: ele filtra os elementos de uma array por meio de uma condição, todos os elementos que passarem pela condição é retornado [8, 8]  

``some():`` ele retorna um valor booleano (true ou false), o primeiro elemento que  encontar e satisfaça a condição ele retorna true

**Fase 3**

1\. O que será impresso no console?  
```javascript
const usuario = { nome: "Ana", idade: 28, cidade: "SP" }; 
const { nome, ...resto } = usuario;
console.log(nome, resto);
 // O nome é extraído, e o ...resto cria um novo objeto com o que sobrou. 
```
 
***a) "Ana" { idade: 28, cidade: "SP" }***

2\. Qual é o valor de resultado?  
```javascript
const numeros = [1, 2, 3, 4, 5]; 
const [a, , b, ...c] = numeros;  // 'a' pega o 1. O espaço vazio ',' pula o 2. 'b' pega o 3. 
console.log(a, b, c);
// O '...c' pega todo o resto em uma nova lista. 
```
 
***a) 1 3 \[4, 5\]***

3\. O que acontece aqui?  
```javascript
const pessoa = { nome: "Lucas", endereco: { cidade: "RJ", cep: "12345" } }; 
const { endereco: { cidade } } = pessoa; 
console.log(cidade);
// Entramos dentro de endereco para buscar apenas a cidade diretamente.
```


***a) "RJ"***

4\. Qual será o resultado impresso?  
```javascript
const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado);
// Como os dois têm a chave 'b', o último (extra) atropela o primeiro.
```


***b) { a: 1, b: 3, c: 4 }***

5\. Qual será a saída?  
```javascript
function teste({ x = 10, y = 20 } = {}) {
 console.log(x + y);
}
teste({ x: 5 });
// quando coloca x: 5, então ele substitui o 10, o 'y' não foi enviado, então usa o padrão 20.
```

***b) 25***

6\. O que este código imprime?  
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2, 5];
console.log(arr3);
// Espalha os itens de arr1 e arr2 dentro de um novo array e adicionamos o 5.
```


***c) \[1, 2, 3, 4, 5\]***

7\. O que será exibido?  
```javascript
const config = { tema: "escuro", fonte: "Arial", tamanho: 14 };
const { tema: modo, ...opcoes } = config;
console.log(modo, opcoes.fonte);
// tema: modo significa: pegue o valor de tema mas salve na variável chamada modo.
```


***a) "escuro" "Arial"***

8\. Analise o resultado:  
```javascript
const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {//a=10, b=20, resto é[30, 40] tamanho 2
 return a + b + resto.length;
}
console.log(soma(...valores));
```


***b) 32***

9\. O que será logado?  
```javascript
const usuario = {
 nome: "Carlos",
 habilidades: ["JS", "Python", "SQL"]
};
const { habilidades: [h1, , h3] } = usuario;
// acessamos a lista e pegamos o primeiro h1, pula o segundo e pega o terceiro h3 
console.log(h1, h3);
```


***a) "JS" "SQL"***

10\. Qual o resultado deste código?  
```javascript
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { ...obj1 };
obj2.b.x = 99;
console.log(obj1.b.x);

// O spread faz uma cópia rasa, o objeto interno 'b' ainda aponta para o mesmo lugar na memória.
// fazer alteração no x, o obj2 afeta o obj1 tambem
```


***b) 99***

**Fase 4**

11\. O que será impresso?  
```javascript
const matriz = [ [1, 2], [3, 4], [5, 6] ];
const [, [, y], ...resto] = matriz;
console.log(y, resto);
// pula o primeiro array, no segundo array [3, 4], pula o 3 e pegamos o 4, y.
// resto pega o que sobrou da matriz principal [[5, 6]].
```


***b) 4 [[5, 6]]***


12\. Qual é o resultado?  
```javascript
const obj = {
 id: 1,
 dados: {
 nome: "Ana",
 preferencias: {tema: "escuro",fonte: "Sans"}
 }
};
const { dados: { preferencias: { tema }, ...resto } } = obj;
console.log(tema, resto);
// tira o tema. O ...resto pega o que sobrou dentro de dados que é o nome.
```

***a) "escuro" { nome: "Ana" }***

13\. O que será exibido?  
```javascript
const dados = { a: 1, b: 2, c: 3 };
function processar({ a, ...resto }) {
 resto.c = 99;
 return [a, resto];
}
const r = processar(dados);
console.log(dados.c, r[1].c);
// mudar resto.c não altera o original |dados.c| porque o rest criou uma cópia desvinculada.
```
 
***a) 3 99***

14\. Qual o output?  
```javascript
const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
 return y;
};
console.log(func(arr));
// x = 1, resto = [2, 3]. o valor padrão de y usa essas variáveis 2, 3, 1

```


***a) \[2, 3, 1\]***

15\. Analise o comportamento:  
```javascript
const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom);
// nesse tem spread no objeto pai E no objeto filho opcoes
// eles são independentes se mudar um não vai afetar o outro
```

***c) 100 200***


