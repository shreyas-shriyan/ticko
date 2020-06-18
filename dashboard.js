var element = document.getElementById('issue_container')

function start(){
    event.preventDefault()
    var script_display = document.getElementById('script_display')
    script_display.setAttribute('class','col-9')
    script_display.value = "<script scr = "+"https://cdn.jsdelivr.net/gh/shreyas-shriyan/ticko/script.js"+" type = "+"text/javascript"+"></script>"
    var temp = JSON.parse(localStorage.getItem('customer_details'))
    if(temp.customer_email == undefined){
    }
    else{
    console.log('got')
    var tr = document.createElement('tr')
    var td_email = document.createElement('td')
    var td_category = document.createElement('td')
    var td_issue = document.createElement('td')
    td_email.innerText = temp.customer_email
    td_category.innerText = temp.customer_category
    td_issue.innerText = temp.customer_request
    tr.append(td_email)
    tr.append(td_category)
    tr.append(td_issue)
    element.append(tr)
    }
        
}


window.addEventListener('load',start)