let amigos = [];

const input = document.getElementById('amigo');
const botonReiniciar = document.getElementById("reiniciar");
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = input.value.trim();

    if (!nombre) {
        alert("Debes ingresar un nombre para agregarlo en la lista");
        input.focus();
        return;
    }

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombre)) {
        alert("Solo se permiten letras (A-Z), acentos y espacios");
        input.focus();
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ya pusiste este nombre, debes ingresar otro nombre!");
        input.value = '';
        input.focus();
        return;
    }

    
    botonReiniciar.disabled = false;
    amigos.push(nombre);

    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    input.value = '';
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debes ingresar al menos 3 nombres para realizar el sorteo");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const nombreElegido = amigos[indice];

    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreElegido}</strong></li>`;
}

function reiniciarJuego() {
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    amigos = [];
    botonReiniciar.disabled = true;
    document.getElementById('amigo').value = '';    
    input.focus();
}