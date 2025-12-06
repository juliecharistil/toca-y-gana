let puntos = 0;

const boton = document.getElementById("btn");
const contador = document.getElementById("contador");

boton.addEventListener("click", () => {
    puntos++;
    contador.textContent = "Puntos: " + puntos;
});
