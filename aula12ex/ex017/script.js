function tabuada() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    alert("Digite um número por favor!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}

// function tabuada() {
//   let num = document.getElementById("txtn").value;
//   let tab = document.getElementById("seltab");

//   let n = Number(num);

//   if (n.length == 0) {
//     alert("Digite um número por favor!");
//   } else {
//     let c = 1;
//     while (c <= 10) {
//       let item = document.createElement("option");
//       item.text = `${c} x ${n} = ${c * n}`;
//       tab.appendChild(item);
//       c++;
//     }
//   }
// }
