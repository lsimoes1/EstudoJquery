var frase = $(".frase").text();
var numpalavras = frase.split(" ").length;
var ContadorFrase = $("#tamanhoDaFrase");

ContadorFrase.text(numpalavras);