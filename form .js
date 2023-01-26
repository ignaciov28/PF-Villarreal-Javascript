
const form = document.querySelector("#form-contact");
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const consulta = document.querySelector("#consulta");

let consultas = JSON.parse(localStorage.getItem("consultas")) || [];

form.onsubmit = (e) => {
    e.preventDefault();
    
    fetch("https://63d1dc0a06556a0fdd31e757.mockapi.io/contacto", {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre.value,
            email: email.value,
            consulta: consulta.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        consultas.push(data);
        localStorage.setItem("consultas", JSON.stringify(consultas));
    })
    .catch(error => console.log(error));
}

