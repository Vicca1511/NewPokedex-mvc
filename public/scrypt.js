function Mudarestado(el) {
    let display = document.querySelector(el).style.display;
    if (display == "none")
      document.querySelector(el).style.display = 'block';
    else
      document.querySelector(el).style.display = 'none';
  }