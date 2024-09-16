document.getElementById("generar").addEventListener("click", generarContrasena);
document.getElementById("limpiar").addEventListener("click", limpiarCampos);

function generarContrasena() {
    const cantidad = document.getElementById("cantidad").value;
    const incluirLetras = document.getElementById("letras").checked;
    const incluirMayusculas = document.getElementById("mayusculas").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-={}[]|:;<>,.?/';

    let caracteresDisponibles = '';

    if (incluirLetras) caracteresDisponibles += letras;
    if (incluirMayusculas) caracteresDisponibles += mayusculas;
    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;

    if (caracteresDisponibles === '') {
        alert("Debe seleccionar al menos una opción.");
        return;
    }

    let contrasena = '';
    for (let i = 0; i < cantidad; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasena += caracteresDisponibles[randomIndex];
    }

    document.getElementById("contrasena").value = contrasena;
}

function limpiarCampos() {
    document.getElementById("cantidad").value = '';
    document.getElementById("contrasena").value = '';
}
