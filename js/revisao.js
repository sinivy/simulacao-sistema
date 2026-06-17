const dados =
JSON.parse(
    localStorage.getItem("dadosPlanilha")
);

const cabecalho =
document.getElementById("cabecalhoRevisao");

const corpo =
document.getElementById("corpoRevisao");

const resumo =
document.getElementById("resumo");

let total = 0;

const colunas =
Object.keys(dados[0]);

let htmlCabecalho = "<tr>";

colunas.forEach(coluna => {

    htmlCabecalho +=
    `<th>${coluna}</th>`;

});

htmlCabecalho += "</tr>";

cabecalho.innerHTML =
htmlCabecalho;

dados.forEach(item => {

    let linha = "<tr>";

    colunas.forEach(coluna => {

        linha +=
        `<td>${item[coluna]}</td>`;

    });

    linha += "</tr>";

    corpo.innerHTML += linha;

    total +=
    Number(item.Valor);

});

resumo.innerHTML = `

<p><strong>Itens:</strong> ${dados.length}</p>

<p><strong>Valor Total:</strong>
R$ ${total.toFixed(2)}</p>

`;

function gerarNota() {

    localStorage.setItem(
        "valorTotal",
        total
    );

    window.location.href =
    "nota.html";

}