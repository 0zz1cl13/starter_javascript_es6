// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10))
// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = item => item.idade;
console.log(mostraIdade(usuario));
// 3.3 
const nome = 'Diego';
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({
  nome, 
  idade
});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); 
// 3.4
const promise = () => new Promise((resolve, reject) => resolve());