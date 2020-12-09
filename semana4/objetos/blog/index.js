const container = document.getElementById("container-de-posts")
const tituloPost = document.getElementById('titulo-post')
const autorPost = document.getElementById('autor-post')
const conteudoPost = document.getElementById('conteudo-post')
const imagePost = document.getElementById('imagem-post')



// function adicionaPost(){
//   const conteudo = {
//     titulo: tituloPost.value,
//     nomeAutor: autorPost.value,
//     postagem: conteudoPost.value
//   }
//   container.innerHTML += `<div class="novo-post"> <h1 class="titulo">${conteudo.titulo}</h1><h3 class="autor">${conteudo.nomeAutor}</h3><p class="conteudo">${conteudo.postagem}</p></div>`
  
// }
function criarPost(event){
    criaPostagem()
}

function criaPostagem(){
 const conteudo = {
    titulo: tituloPost.value,
    nomeAutor: autorPost.value,
    postagem: conteudoPost.value,
    imagem: imagePost.value
  }
  if(conteudo.imagem.includes('http://') || conteudo.imagem.includes('https://')){
    container.innerHTML += `<div class="novo-post"> <h1 class="titulo">${conteudo.titulo}</h1><h3 class="autor">${conteudo.nomeAutor}</h3><img class="images-postagem" src="${conteudo.imagem}"><p class="conteudo">${conteudo.postagem}</p></div>`
  }else{
    container.innerHTML += `<div class="novo-post"> <h1 class="titulo">${conteudo.titulo}</h1><h3 class="autor">${conteudo.nomeAutor}</h3><p class="conteudo">${conteudo.postagem}</p></div>`
  }

  console.log(conteudo)

  tituloPost.value = ''
  autorPost.value = ''
  conteudoPost.value = ''
  imagePost.value = ''
}