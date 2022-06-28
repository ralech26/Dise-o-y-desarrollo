const nombre = document.getElementById("name")
const email = document.getElementById("email")
const msj = document.getElementById("text")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    if(msj.value.length <1){
        warnings += `Pocos caracteres <br>`
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = "el mensaje es muy corto";
    }else{
        parrafo.innerHTML = "Enviado";
    }
})
 
typewriter
  .pauseFor(2500)
  .typeString()
  .pauseFor(200)
  .deleteChars(10)
  .start();
