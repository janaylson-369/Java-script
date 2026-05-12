// em app.js
let montarnome = () => {
    return nomeusuario.reduce((acc, item) => {
      return acc + item + '';
    }, '').trim();
  }

  return nomeusuario.join(' ');
