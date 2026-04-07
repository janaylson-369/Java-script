
let exibir_log = (valor) => console.log(valor);
let exibir_alert = (valor) => alert(valor);
let exibir_p = (i) => ( document.getElementById(valor).innerHTML = `<p> ${i}<p/>`);

var incrementador = () => {
  let i = 0;
  let avancar = () => {
    i = i + 1
    return i;
  };

  let decrementar = () => {
    i = i - 1
    return i;
  };

  let valorAtual = ()=>{
    return i;
  }

  let retornos = [() => valorAtual, avancar, decrementar];
  return retornos;

};

let [incremento, avancar] = incrementador();

const exibicao = {
  exibir_log: (valor) => console.log(valor),
  exibir_alert: (valor) => alert(valor),
  exibir_p: (i) => ( document.getElementById(valor).innerHTML = `<p> ${i}<p/>`),

};

let {primeiro, segundo, terceiro} = exibicao;


avancar();

exibir_log(incremento());
avancar();
exibir_alert(incremento());

