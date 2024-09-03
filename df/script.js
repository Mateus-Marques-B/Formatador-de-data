const paragrafoDataAtual = document.getElementById("data-atual");
const opcData = document.getElementById("opc-data");

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

const dataFormatada = `${dia}-${mes}-${ano}`;
paragrafoDataAtual.textContent = dataFormatada;

opcData.addEventListener("change", () => {
  switch (opcData.value) {
    case "yyyy-mm-dd":
      paragrafoDataAtual.textContent = dataFormatada
        .split("-")
        .reverse()
        .join("-");
      break;
    case "dd-mm-yyyy-h-mm":
      paragrafoDataAtual.textContent = `${dia}-${mes}-${ano} ${hora} Horas ${minuto} Minutos`;
      break;
  }
});
