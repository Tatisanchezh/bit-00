async function obtenerImagenes(){
  try {
      let imagenes = await fetch('https://random-d.uk/api/v2/random')
      imagenes = await imagenes.json();
          $img.setAttribute("src", imagenes.url)
  } catch (error) {
      console.log("error")    
  }
  }
obtenerImagenes()
const $btn = document.querySelector("button");
const $img = document.querySelector("img");



$btn.addEventListener("click", obtenerImagenes);
  