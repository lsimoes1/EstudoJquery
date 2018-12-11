
var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    InicializaContadores();
    InicializaControles();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numpalavras = frase.split(" ").length;
    var ContadorFrase = $("#tamanhoDaFrase");
    ContadorFrase.text(numpalavras);
};

function InicializaContadores(){
    $(".campo-digitacao").one("focus", function(){

        var tempoRestante = $("#tempo-digitacao").text();

        var idInterval = setInterval(function(){
            tempoRestante --;
            $("#tempo-digitacao").text(tempoRestante);

            if(tempoRestante <= 0)
            {
                $(".campo-digitacao").attr('disabled', true);
                clearInterval(idInterval);
            }
        },1000);
    });
};

function InicializaControles(){
    $(".campo-digitacao").on("input", function(){
        var conteudo = $(".campo-digitacao").val();
        var qtdPalavras = conteudo.split(/\S+/).length-1;

        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(conteudo.length);
    });
};

function reiniciaJogo(){
    console.log("teste");
    $(".campo-digitacao").attr('disabled', false);
    $(".campo-digitacao").val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    InicializaContadores();
};
