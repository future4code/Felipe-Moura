function adicionaPost(){
  const container = document.getElementById("container-de-posts")
  const tituloPost = document.getElementById('titulo-post')
  const autorPost = document.getElementById('autor-post')
  const conteudoPost = document.getElementById('conteudo-post')
  container.innerHTML += `<div class="novo-post"> <h1 class="titulo">${tituloPost.value}</h1><h3 class="autor">${autorPost.value}</h3><p class="conteudo">${conteudoPost.value}</p></div>`
  console.log(tituloPost.value)
}