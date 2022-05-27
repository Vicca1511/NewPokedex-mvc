function Mudarestado(el,id) {
    id = parseInt(id);
    let display = document.querySelectorAll(el)[id - 1].style.display;
    console.log(display);
    if (display == "none"){

        document.querySelectorAll(el)[id - 1].style.display = 'block';
    }
    else{       
        document.querySelectorAll(el)[id - 1].style.display = 'none';
    }
}