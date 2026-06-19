function ejecutar() {
    let estilos = ["Jazz", "Blues"];

    estilos.push("Rock-n-Roll");

    let medio = Math.floor(estilos.length / 2);
    estilos[medio] = "Classics";

    let eliminado = estilos.shift();

    estilos.unshift("Rap", "Reggae");

    console.log("Array final:", estilos);
    console.log("Elemento eliminado:", eliminado);

    document.getElementById("resultado").innerHTML =
        `Array final: ${estilos} <br> Eliminado: ${eliminado}`;
}