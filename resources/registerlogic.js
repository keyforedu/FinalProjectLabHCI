// register
const name = document.getElementById("name")
const password = document.getElementById("password")
const email = document.getElementById("email")
const age = document.getElementById("age")
const agreement = document.getElementById("agreement")
const regbutton = document.getElementById("reg-button")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")

regbutton.addEventListener('click', (event)=>{
    event.preventDefault()
    // console.log("uwu")
    var errorText = ""
    const names = name.value
    if(names == ""){
        console.log("Name must be filled")
        errorText += "Name must be filled<br>"
    } else if(names.length < 5 || names.length > 20){
        console.log("Name must be between 5 to 20 chars");
        errorText += "Name must be between 5 to 20 chars<br>"
    }

    const emails = email.value
    if(!emails.includes("@gmail.com")){
        errorText += "Email must contain @gmail.com <br>"
    }
    
    const ages = age.value
    if (ages < 17){
        errorText += "Age must be at least 17 y.o. <br>"
    }

    const passwords = password.value
    if(passwords.length != 8){
        errorText += "Password should be at exact 8 chars<br>"
    }


    const agreements = agreement.checked
    if(!agreements){
        errorText += "You must agree to terms and conditions first"
    }

    if(errorText == ""){
        alert("Registration succeed!")
    }

    divError.innerHTML = errorText;
})  


