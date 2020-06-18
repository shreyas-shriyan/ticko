var form = document.querySelector('form')
var email = document.getElementById('email')
var url = document.getElementById('url')
var password = document.getElementById('password')

var customer_array = []

function Customers(email,url,password){
    this.email = email
    this.url = url
    this.password = password
}


function register (){
    console.log('found')
    event.preventDefault()
    var customer_object = new Customers(email,url,password)
    var customer_storage = JSON.parse(localStorage.getItem('customer_details'))
    if(!customer_storage){
        customer_storage = {}
    }
    customer_storage['customer_details'] = customer_object
    localStorage.setItem('customer_details',JSON.stringify(customer_storage))
    window.location.href = "dashboard.html"
}



function start(){
    form.addEventListener('submit',register)
}


window.addEventListener('load',start)