//////

function contar() {
  let ini = document.querySelector("#txt1").value;
  let fim = document.querySelector("#txtf").value;
  let pas = document.querySelector("#txtp").value;

  let resultado = document.querySelector("#res");

  if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
    resultado.innerHTML = "impossível contar";

    alert("Todos os campos devem ser preenchidos");

    return;
  } else {
    resultado.innerHTML = "contando...";
    let i = Number(ini);
    let f = Number(fim);
    let p = Number(pas);

    if (pas == 0) {
      alert("Passo inválido! COnsiderando Passo 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} \u{1F449}`;
      }
    }
  }
}
