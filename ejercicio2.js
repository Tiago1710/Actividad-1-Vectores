document.getElementById("formDia").addEventListener("submit", function(e) {
    e.preventDefault();

    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let num = document.getElementById("numero").value;

    let dia = dias[num];

    console.log("Número:", num);
    console.log("Día:", dia);

    document.getElementById("resultado").innerText = "Día: " + dia;
});