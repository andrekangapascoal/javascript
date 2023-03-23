let num = document.getElementsByClassName("fnum");
let lista = document.getElementsByClassName("flista");
let res = document.getElementsByClassName("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return false;
  } else {
    return true;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `O valor ${num.value} foi adicionado`;
    lista.appendChild(item);
  } else {
    alert("Valor inválido ou já se encontra na lista.");
  }
}
