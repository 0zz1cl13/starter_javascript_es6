const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketeseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketeseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

// 2.1
const idades = usuarios.map(item => item.idade);
console.log(idades);
// 2.2 
const users = usuarios.filter(item => item.empresa === 'Rocketeseat' && item.idade > 18);
console.log(users);
// 2.3 
const user_google = usuarios.find(item => item.empresa === 'Google');
console.log(user_google);
// 2.4
const op = usuarios
  .map( item => ({ ...item, idade: item.idade * 2 }))
  .filter(item => item.idade <= 50);
console.log(op);