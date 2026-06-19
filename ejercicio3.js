let nombres = [];

document.getElementById("formNombres").addEventListener("submit", function(e) {
    e.preventDefault();

    nombres = [];

    let inputs = document.querySelectorAll("#formNombres input");

    inputs.forEach(input => {
        nombres.push(input.value);
    });

    console.log("Array:", nombres);

    let resultado = "Array: " + nombres + "<br>";

    // Ordenado
    let ordenado = [...nombres].sort();
    console.log("Ordenado:", ordenado);

    resultado += "Ordenado: " + ordenado + "<br>";

    // Cantidad
    resultado += "Cantidad: " + nombres.length + "<br>";

    document.getElementById("resultado").innerHTML = resultado;
});

document.getElementById("formBuscar").addEventListener("submit", function(e) {
    e.preventDefault();

    let buscar = document.getElementById("buscar").value;

    let indice = nombres.indexOf(buscar);

    if (indice !== -1) {
        console.log("Encontrado en:", indice);
        document.getElementById("resultado").innerHTML += `<br>Encontrado en posición: ${indice}`;
    } else {
        console.log("No encontrado");
        document.getElementById("resultado").innerHTML += "<br>No encontrado";
    }
});