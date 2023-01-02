
const overlay = document.getElementById("overlay");
window.addEventListener("load",()=>{
    const load = document.querySelector(".load");

    load.classList.add("load-hidden");
    load.addEventListener("transitionend", () => {
            document.body.removeChild(document.querySelector(load));
        });
});
function abrir(id){
    const ventana = document.getElementById(id);
    ventana.style.opacity="1";
    ventana.style.scale="2";
    overlay.style.visibility="visible";
}
function cerrar(id){
    const ventana = document.getElementById(id);
    ventana.style.opacity="0";
    ventana.style.scale="0.5";
    overlay.style.visibility="hidden";
}
