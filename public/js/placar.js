function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");

    var usuario = "Seu-nome";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
};

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Ícone dentro do <a>.
    link.append(icone);

    // <a> dentro do <td>.
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>.
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
};

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
};

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
};

$("#botao-placar").click(mostraPlacar);
