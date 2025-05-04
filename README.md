# Funções em JavaScript: Declaration, Expression e Arrow

## 📘 Declaration (Declaração)

### 📄 Descrição
É o modo mais tradicional de definir uma função. Começa com a palavra reservada `function`, seguida do nome da função `soma1`, parâmetros entre parênteses ( parametros são opcionais) e o corpo da função que fica entre chaves {}.


```javascript
function soma1(a, b) {
  return a + b;
}
cmonsole.log(soma1(424, 848)); // 1272
```

### ✅ Vantagens:
- **Içamento**: facilita a organização do código, isso porque podemos definir a função depois de chamá-la.
- Fica mais legível em códigos maiores.
- Facilita a reutilização.

### ❌ Desvantagens:
- Menos flexível em ambientes que exigem funções como valores.
- Demora mais para escrever em comparação com uma Arrow Functions ou Function Expressions.

### 💡 Exemplos:
```javascript
//EX:1
function nord() {
  console.log("Olá, mundo!");
}
nord();

//EX:2
function lord() {
  function smsg() {
    return "Hoje é um ótimo dia para aprender JavaScript!";
  }
  console.log(smsg());
}
lord();

//EX:3
function soma1() {
  let a = 35;
  let b = 357;
  return a + b;
}
console.log(soma1());
```

---

## 💻 Function Expression

### 📄 Definição
A função Expression é parecida com a função declaração A diferença é que ela vai ser atribuída para uma variável. A função pode ser usada através dessa variável.

```javascript
const quadr = function(numero) {
  return numero * numero;
};

console.log(quadr(5)); // 25
```

### ✅ Vantagens:
- Mais flexível: pode ser passada como argumento ou usada dinamicamente.
- Pode ser criado sem nome, isso é bom pra quando se quer criar funções rápidas.

### ❌ Desvantagens:
- O código pode ficar menos legível se usada sem cuidado.
- Se tentar usar antes da declaração pode gerar erros.

### 💡 Exemplos:
```javascript
// EX:1
const quadr = function (numero) {
  return numero * numero;
};
console.log(quadr(5));

//EX:2
const sald = function(nome) {
  return `Olá, ${nome}!`;
};

console.log(sald('Lucas'));
console.log(sald('Maria'));
console.log(sald('João'));

//EX:3
const par = function(num) {
  return num % 2 === 0;
};

console.log(par(4)); // true
console.log(par(7)); // false
```

---

## ⚡ Arrow Function

### 📄 Descrição
 A função arrow é a forma mais resumida dos tipos de função, ao invés de usar a palavra reservada `function`  substituímos por `=>`, em alguns casos não precisamos nem de colocar `return` (no cenário em que só definimos apenas uma instrução no corpo da função).

 
```javascript
const soma = (a, b) => a + b;
console.log(soma(2, 3));
 // 5
```

### ✅ Vantagens:
- Código mais curto e limpo.
- Ideal para funções pequenas para usar de callback.
OBS: **CALLBACK** Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

### ❌ Desvantagens:
- Ela pode ser menos legível em funções mais complexas

### 💡 Exemplos:
```javascript
//EX:1
let num = () => {
  let n1 = 2;
  let n2 = 3;
  let t = n1 + n2;
  return t;
};
console.log(num()); // 5

//EX:2
const ola = () => {
  console.log("Olá, mundo!");
};
ola(); //Olá, mundo!

//EX:3
const quadr = num => {
  const resultado = num * num;
  return resultado;
};

console.log(quadr(20)); // 400
console.log(quadr(10)); // 100
```
