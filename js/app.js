
window.addEventListener("load",()=>{
    const load = document.querySelector(".load");

    load.classList.add("load-hidden");
    load.addEventListener("transitionend", () => {
            document.body.removeChild(document.querySelector(load));
        });
});