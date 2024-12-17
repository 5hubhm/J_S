document.getElementById('feedback').textContent = "Feed Back Form"

function show(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value
    let div = document.getElementById('div').value
    let fb = document.getElementById('fd').value
    let rate = document.getElementById('rate').value

    document.getElementById('content').innerHTML = "Thank you for Giving your feedback"
}