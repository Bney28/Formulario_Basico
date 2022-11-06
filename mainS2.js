//Local Storage
let nuevoForm = document.querySelector(".form")

nuevoForm.addEventListener("submit", (event) => {
    /* event.preventDefault() */
    
    let totalRegistros;
    let _reg = localStorage.getItem("registrosJson")

    if (_reg == undefined) {
        totalRegistros = []
    } else {
        totalRegistros = JSON.parse(_reg)
    }

    let nuevoRegistro = {
        nombre: event.target.nombre.value,
        apellido: event.target.apellido.value,
        email: event.target.email.value,
        contraseña: event.target.password.value
    }

    totalRegistros.push(nuevoRegistro)

    let registrosJson = JSON.stringify(totalRegistros)

    localStorage.setItem("registrosJson", registrosJson)


    nuevoForm.reset()

})


//Visualización de Tarjetas

let output = document.querySelector(".output")

function tarjetas(texto2) {
    let parrafo = document.createElement("p")
    let texto = document.createTextNode(texto2)
    parrafo.appendChild(texto)
    output.appendChild(parrafo)

    return parrafo
}

let misTarjetas = JSON.parse(localStorage.getItem("registrosJson"))

misTarjetas.forEach(element => {
    let nombre = element.nombre
    let apellido = element.apellido
    let email = element.email

    tarjetas("Registro exitoso! " + nombre + " " + apellido + " - Correo " + email)
});


//Validaciones
let validacion = document.querySelectorAll("input");

validacion.forEach(validacion => {
    validacion.addEventListener("input", () => {
    validacion.setCustomValidity("");
    validacion.checkValidity();
    })
    validacion.addEventListener("invalid", () => {
        validacion.setCustomValidity("Debes rellenar todos los campos")
        })
    })


let validacionEmail = document.querySelector("#email")
    validacionEmail.addEventListener("invalid", () => {
    validacionEmail.setCustomValidity("Parece que esto no es un correo electrónico")
        })
