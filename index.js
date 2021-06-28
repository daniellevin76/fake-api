

const init = function (){
    document.getElementById("submitBtn").addEventListener('click', login)
}



const login = function (e){
    e.preventDefault()
    let result = false

    if(result){
        //good 
        document.getElementById('signInForm').submit()
    } else {
        let error = document.querySelector('.error');
        let input = error.querySelector('input');
        error.setAttribute('data-errormsg', `...Missing ${input.placeholder}`)
    }
  
}

const validateCredentials = function(e) {
    let valid = false
    let inputMail = document.getElementById('email').value
    let inputPsw = document.getElementById('password').value
    return valid
    
}

document.addEventListener('DOMContentLoaded', init)