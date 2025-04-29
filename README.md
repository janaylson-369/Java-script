# Funções em JavaScript: Declaration, Expression e Arrow

## 📘 Declaration (Declaração)

### 📄 Descrição
É o modo mais tradicional de definir uma função. Começa com a palavra reservada `function`, seguida do nome da função, parâmetros (entre parênteses) e o corpo da função (entre chaves).

```javascript
function soma1(a, b) {
  return a + b;
}

console.log(soma1(424, 848)); // 1272
```

### ✅ Vantagens:
- **Hoisting**: permite chamar a função antes de sua definição no código.
- Mais legível em códigos grandes.
- Facilita a reutilização.

### ❌ Desvantagens:
- Menos flexível quando usada como valor (ex: passada como argumento).
- Mais longa para funções simples em comparação com Arrow Functions ou Function Expressions.

### 💡 Exemplos:
```javascript
function nord() {
  console.log("Olá, mundo!");
}
nord();

function lord() {
  function smsg() {
    return "Hoje é um ótimo dia para aprender JavaScript!";
  }
  console.log(smsg());
}
lord();

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
Semelhante à Declaration, mas a função é atribuída a uma variável.

```javascript
const quadr = function(numero) {
  return numero * numero;
};

console.log(quadr(5)); // 25
```

### ✅ Vantagens:
- Mais flexível: pode ser passada como argumento ou usada dinamicamente.
- Pode ser **anônima** (sem nome).

### ❌ Desvantagens:
- Menos legível se usada sem cuidado.
- Não pode ser usada antes da sua definição.

### 💡 Exemplos:
```javascript
const sald = function(nome) {
  return `Olá, ${nome}!`;
};

console.log(sald('Lucas'));
console.log(sald('Maria'));
console.log(sald('João'));

const par = function(num) {
  return num % 2 === 0;
};

console.log(par(4)); // true
console.log(par(7)); // false
```

---

## ⚡ Arrow Function

### 📄 Descrição
Forma moderna e compacta de criar funções. Usa a seta `=>` em vez da palavra `function`. Ideal para funções curtas.

```javascript
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5
```

### ✅ Vantagens:
- Código mais curto e limpo.
- Ideal para funções pequenas, especialmente callbacks.

### ❌ Desvantagens:
- Pode ser difícil de ler em funções complexas.
- Não tem seu próprio `this`.

### 💡 Exemplos:
```javascript
let num = () => {
  let n1 = 2;
  let n2 = 3;
  let t = n1 + n2;
  return t;
};
console.log(num()); // 5

const ola = () => {
  console.log("Olá, mundo!");
};
ola();

const quadr = num => {
  const resultado = num * num;
  return resultado;
};

console.log(quadr(20)); // 400
console.log(quadr(10)); // 100
```
