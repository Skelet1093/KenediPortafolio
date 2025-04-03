document.addEventListener("DOMContentLoaded", () => {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;

    const formulario = document.querySelector(".Formulario");

    const inputNumero = document.createElement("input");
    inputNumero.type = "number";
    inputNumero.placeholder = "Ingresa un número";
    inputNumero.id = "inputNumero";

    const botonIntentar = document.createElement("button");
    botonIntentar.textContent = "Intentar";

    const botonNuevoJuego = document.createElement("button");
    botonNuevoJuego.textContent = "Nuevo Juego";

    const mensaje = document.createElement("div");
    mensaje.id = "mensaje";

    formulario.appendChild(inputNumero);
    formulario.appendChild(botonIntentar);
    formulario.appendChild(botonNuevoJuego);
    formulario.appendChild(mensaje);

    botonIntentar.addEventListener("click", () => {
        const valor = inputNumero.value;

        if (!valor) {
            alert("Por favor, ingresa un número.");
            return;
        }

        intentos++;
        const numero = parseInt(valor);

        if (numero < numeroSecreto) {
            mensaje.textContent = "El número secreto es mayor.";
        } else if (numero > numeroSecreto) {
            mensaje.textContent = "El número secreto es menor.";
        } else {
            mensaje.textContent = `¡Felicidades! Adivinaste el número secreto en ${intentos} intento${intentos > 1 ? "s" : ""}.`;
        }

        inputNumero.value = ""; 
    });

    botonNuevoJuego.addEventListener("click", () => {
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        intentos = 0;
        mensaje.textContent = "";
        alert("¡Se ha iniciado un nuevo juego!");
    });
});
