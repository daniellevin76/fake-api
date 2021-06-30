const signInForm = document.querySelector("#sign-in-form");
let signInMail = signInForm.querySelector("#sign-in-mail");
const submitBtn = signInForm.querySelector("#submit-btn");
let inputPassword = signInForm.querySelector("#password");

//"cityslicka", eve.holt@reqres.in

loginUrl = "https://reqres.in/api/login";

submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    fetchApi(loginUrl)
})

function fetchApi(url) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: `${signInMail.value}`,
      password:`${inputPassword.value}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => login(data));
}

function login(data){
    if(data.token==="QpwL5tke4Pnpja7X4"){
        signInForm.submit();
    }else{
       signInMail.placeholder = "Wrong Email, try again"
        signInForm.reset();
    }
}