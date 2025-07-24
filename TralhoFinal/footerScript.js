const aside = document.getElementById("aside");
const footer = document.getElementById("footer");

function sobreposocao(){
   const footerTop = footer.getBoundingClientRect().top;
   
   if (footerTop <= window.innerHeight) {
    aside.style.top = `-15%`;
   } else {
    aside.style.top = `150px`;
   }
}

window.addEventListener("scroll", sobreposocao);