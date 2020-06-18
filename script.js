/* this function adds a ticko request button on customer website */

function start(){
    var body = document.querySelector('body')
    var request_button = document.createElement('a')
    request_button.innerHTML = "<button id='created_button' >Raise a ticket</button>"
    request_button.setAttribute('href','https://ticko.netlify.app/ticket_page')
    body.append(request_button)
    var created_button = document.getElementById('created_button')
    created_button.style.border = 'none';
    created_button.style.position = 'absolute';
    created_button.style.borderRadius = '30px';
    created_button.style.bottom = '30px';
    created_button.style.right = '30px';
    created_button.style.backgroundColor = 'blue';
    created_button.style.padding = '20px';
    created_button.style.color = 'white';
    created_button.style.fontSize = '20px'
}

window.addEventListener('load',start)