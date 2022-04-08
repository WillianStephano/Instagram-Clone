//Objeto com as imagens
const colecaoImg = [
   {
      id: 1,
      img: "Conteudo/slide1.png",
   },
   
   {
      id: 2,
      img: "Conteudo/slide2.png",
   },
   
   {
      id: 3,
      img: "Conteudo/slide3.png",
   },
];

//Selecionando os elemenos no HTML
const img = document.querySelector(".slide_img");

let imgAtual = 0;

//Ao cerregar a pagina chame a funcao
window.addEventListener("DOMContentLoaded", function () {
   mostrarImg();
});

//Mostra uma imagem na tela com base no id do objeto criado
function mostrarImg() {
   let item = colecaoImg[imgAtual];
   img.src = item.img;
}

function proximaImg() {
   imgAtual++;
   if (imgAtual > colecaoImg.length) {
      imgAtual = 0;
   }
   mostrarImg();
}

//Chama a funcao de troca de img a cada 1500ms
setInterval(proximaImg, 1500);
