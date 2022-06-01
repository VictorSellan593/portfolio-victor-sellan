/*------------------CAMBIAR DE TEMA------------------------------- */
const setTheme = theme => document.documentElement.className = theme;

/*------------TIEMPO DE SCROLL---------------------------------*/ 
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top }, 700); //Llega a su destino con el tiempo deseado
    return false;
  });
});
/*--------------------MOSTRAR NAV EN MOBILES------------------*/ 
let item_nav = document.getElementById("nav__items");
let btn_meni = document.getElementById("icon_hamburguer");
let btn_close = document.getElementById("icon_close");
let items = new Array (document.getElementById("link_inicio"), document.getElementById("link_about"), document.getElementById("link_skill"), document.getElementById("link_contacto"), document.getElementById("link_studios"));
items[0].addEventListener("click", ocultar );
items[1].addEventListener("click", ocultar );
items[2].addEventListener("click", ocultar );
items[3].addEventListener("click", ocultar );
items[4].addEventListener("click", ocultar );
btn_meni.addEventListener("click", mostrar );
btn_close.addEventListener("click", ocultar );
function mostrar (){
  btn_meni.style.display='none';
  btn_close.style.display='block';
  item_nav.classList.add("mostrar");
}
function ocultar (){
  item_nav.classList.remove("mostrar");
  btn_meni.style.display='block';
  btn_close.style.display='none';
}

/*----------------MOSTRAR BODY SKILL-------------------*/
function animacion (icon1, body_skill){
let icon = document.getElementById(icon1);
let body = document.getElementById(body_skill);
icon.addEventListener("click", function () {
  body.classList.toggle("ocultarBody");
  icon.classList.toggle("uil-angle-up");
  icon.classList.add("uil-angle-down");
});
}
animacion("iconfrontend_up", "container_fonrtend");
animacion("iconbackend_up", "body_backend");
animacion("iconsoftware_up", "body_software");

