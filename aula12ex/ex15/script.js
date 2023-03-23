function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("Verifique os dados e tenta novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var género = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      género = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bebe-menino.png");
      } else if (idade < 15) {
        //jovem
        img.setAttribute("src", "menino.png");
      } else if (idade < 18) {
        //Adolescente
        img.setAttribute("src", "adolescente-menino.png");
      } else if (idade < 21) {
        //Adulto
        img.setAttribute("src", "adulto.png");
      } else if (idade < 50) {
        //Senhor
        img.setAttribute("src", "senhor.png");
      } else {
        //Idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      género = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bebe-menina.png");
      } else if (idade < 15) {
        //jovem
        img.setAttribute("src", "menino.png");
      } else if (idade < 18) {
        //Adolescente
        img.setAttribute("src", "adolescente-menina.png");
      } else if (idade < 21) {
        //Adulta
        img.setAttribute("src", "adulta.png");
      } else if (idade < 50) {
        //Senhora
        img.setAttribute("src", "senhora.png");
      } else {
        //Idosa
        img.setAttribute("src", "idosa.png");
      }
    }
    res.innerHTML = `Detectamos ${género} com ${idade} anos.`;
    res.appendChild(img);
  }
}
