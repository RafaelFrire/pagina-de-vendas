const Search = document.querySelector('#barra-pesquisa')
const boxSerach = document.querySelector('.search')
const previw = document.querySelector('.vendas-slide img')
const lowpicture = document.querySelector('.image-list')
var indice = 0 


 Pesquisa = () =>{
    Search.classList.toggle('search-effect')
    boxSerach.classList.toggle('search-effect2')
 }
Search.addEventListener('mouseenter', Pesquisa)
Search.addEventListener('mouseleave', Pesquisa)

// Efect banner


bannerEvent = (event) =>{
   if(event.target.id == "miniatura-1"){
   previw.src = "imgs/foto1.png"
   }

   if(event.target.id == "miniatura-2"){
   previw.src = "imgs/foto2.jpg"
   }

   if(event.target.id == "miniatura-3"){
   previw.src = "imgs/foto3.jpg"
   }

   if(event.target.id == "miniatura-4"){
      previw.src = "imgs/foto4.jpg"
      }

}
 lowpicture.addEventListener('click', bannerEvent)


