const arr = [1, 2, 3, 4, 5, 6];
// 5.1
const [ x, ...y ] = arr;
console.log(x);
console.log(y);
function soma(...args){
  let sum = 0;
  for (let arg of args){
    sum += arg;
  }
  return sum;
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
// 5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { 
  ...usuario,
  endereco: { ...usuario.endereco, cidade: 'Lontras'}
};
console.log(usuario2);
console.log(usuario3);