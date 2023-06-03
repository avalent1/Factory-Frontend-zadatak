const wrapper = document.querySelector(".wrapper");
const btn_strelica = document.querySelectorAll(".strelice i");
const sirinaPrve = wrapper.querySelector(".slika").offsetWidth;

btn_strelica.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.id);
        wrapper.scrollLeft += btn.id === "nazaddd" ? -sirinaPrve : sirinaPrve;
    });
})