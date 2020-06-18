var form = document.querySelector('form')

var Customer_ticket = function(customer_email,customer_category,customer_request){
    this.customer_email = customer_email
    this.customer_category = customer_category
    this.customer_request = customer_request
} 

function after_submit(){
    event.preventDefault()
    var customer_email = document.getElementById('customer_email')
    var customer_category = document.getElementById('customer_category')
    var customer_request = document.getElementById('customer_request')
    var customer_details = new Customer_ticket (customer_email.value,customer_category.value,customer_request.value)
    localStorage.setItem('customer_details',JSON.stringify(customer_details))
    window.location.href = "customer_success.html"
}

function start (){
    form.addEventListener('submit',after_submit)
}

window.addEventListener('load',start)