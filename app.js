const URL_BOMBERO = "https://scorefire.github.io/bomberosargentina-calificaciones/";
const URL_JEFES   = "https://scorefire.github.io/bomberosargentina-jefes/";

function entrar(tipo) {
  window.location.href =
    tipo === "bombero" ? URL_BOMBERO : URL_JEFES;
}
