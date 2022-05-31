
function Mudarestado(el, id) {
    id = parseInt(id);
    let display = document.querySelectorAll(el)[id - 1].style.display;

    if (display == "none") {

        document.querySelectorAll(el)[id - 1].style.display = 'block';
    }
    else {
        document.querySelectorAll(el)[id - 1].style.display = 'none';
    }
}

const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})




