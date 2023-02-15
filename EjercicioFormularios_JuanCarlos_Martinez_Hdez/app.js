function envia() {
    document.getElementById("btnE").addEventListener("click", valida, false);
}

function valida(e) {

    if (!validaTlf()) {
        e.preventDefault();
    }
}

function validaTlf() {
    var telefono = document.getElementById("tlf").value;

    if (telefono[0] != "6" || telefono[0] != "9") {
        document.getElementById("errores").innerHTML = "El telefono no empieza por 6 o 9";
        return false;
    }

    return true;
}