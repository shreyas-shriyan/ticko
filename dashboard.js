
function start(){
    var script_display = document.getElementById('script_display')
    script_display.setAttribute('class','col-9')
    script_display.value = "<script scr = "+"https://cdn.jsdelivr.net/gh/shreyas-shriyan/ticko/script.js"+" type = "+"text/javascript"+"></script>"
}

window.addEventListener('load',start)