document.getElementById("tipo-seguro").addEventListener("change", (e) => {
    let selectedOption = e.target.value;
    let precios = document.querySelectorAll(".precio");
    
    precios.forEach((precio) => {
        precio.style.display = "none";
    });

    if (selectedOption) {
        document.getElementById("precio-" + selectedOption).style.display = "inline";
    }
});
