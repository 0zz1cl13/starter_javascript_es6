// const minhaPromise = () => new Promise( (resolve, reject) => {
//   setTimeout(() => { resolve('OK') }, 2000);
// });

// // async function executaPromise() {
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// // }

// const executaPromise= async () => {
//   console.log(await minhaPromise());
// }

// executaPromise();

// import axios from 'axios';

// class Api {
//   static async getUserINfo(username){
//     try{
//       const response = await axios.get(`https://api.github.com/users/${username}`);
//       console.log(response);
//     } catch (err) {
//       console.warn(err);
//     }

//   }
// }

// Api.getUserINfo('diego3g');
// Api.getUserINfo('diego3agasda');

// 3.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
  await delay();
  console.log('1s'); 
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
}

umPorSegundo();
// 3.2
import axios from 'axios';

async function getUserFromGithub(user){
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e){
    console.log('Usuario nao existe');
  }
} 

getUserFromGithub('diego3g');
getUserFromGithub('123ase12daa');
// 3.3
class Github{
  static async getRepositories(repo){
    try{
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (e){
      console.log('Repositorio não existe');
    }
  }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
// 3.4
const buscaUsuario = async usuario => {
  try{
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log('ok');
    console.log(response);
  }catch(e){
    console.log('User nao existe!');
  }
}
buscaUsuario('diego3g');