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

$(".campo-digitacao").one("focus", function(){

    var tempoRestante = $("#tempo-digitacao").text();

    var idInterval = setInterval(function(){
        tempoRestante --;
        console.log(tempoRestante);
        $("#tempo-digitacao").text(tempoRestante);

        if(tempoRestante <= 0)
        {
            $("#tempo-digitacao").attr('disabled', true);
            clearInterval(idInterval);
        }

    },1000);
});