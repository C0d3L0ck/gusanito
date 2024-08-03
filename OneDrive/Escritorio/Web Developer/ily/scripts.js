let btnNo = document.getElementById("btnNo");
let btnYes = document.getElementById("btnYes");
let gusanito = document.getElementById("gusanito");
let h1 = document.getElementById("h1");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const cambiarPosicion = () => {
    btnNo.style.position = "absolute";
    btnNo.style.left = getRandomInt(0, window.innerWidth - btnNo.offsetWidth) + 'px';
    btnNo.style.top = getRandomInt(0, window.innerHeight - btnNo.offsetHeight) + 'px';
}

const Si = () => {
    btnNo.style.visibility = "hidden";
    btnYes.style.visibility = "hidden";
    gusanito.removeAttribute("hidden");
    h1.innerHTML = "GRACIAAAAS TE AMOOOO 💘💖💟💋";
}
