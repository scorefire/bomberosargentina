const URL_BOMBERO = "https://scorefire.github.io/bomberosargentina-calificaciones/";
const URL_JEFES   = "https://scorefire.github.io/bomberosargentina-jefes/";

function entrar(tipo) {
  const btnBombero = document.getElementById("btnBombero");
  const btnJefe = document.getElementById("btnJefe");
  const card = document.querySelector(".main-card");

  // Deshabilitar botones
  btnBombero.disabled = true;
  btnJefe.disabled = true;

  // Cambiar texto del botón presionado
  if (tipo === "bombero") {
    btnBombero.textContent = "Ingresando...";
  } else {
    btnJefe.textContent = "Ingresando...";
  }

  // Animación de salida
  card.classList.add("fade-out");

  // Redirección luego de la animación
  setTimeout(() => {
    window.location.href =
      tipo === "bombero" ? URL_BOMBERO : URL_JEFES;
  }, 500);
}
