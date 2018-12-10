var frase = $(".frase").text();
var numpalavras = frase.split(" ").length;
var ContadorFrase = $("#tamanhoDaFrase");

ContadorFrase.text(numpalavras);

$(".campo-digitacao").on("input", function(){
    var conteudo = $(".campo-digitacao").val();
    var qtdPalavras = conteudo.split(/\S+/).length-1;

    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(conteudo.length);
});