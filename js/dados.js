const dados =
JSON.parse(
    localStorage.getItem("dadosPlanilha")
);

if (!dados || dados.length === 0) {

    alert("Nenhum dado encontrado.");

    window.location.href =
    "importar.html";
}

const cabecalho =
document.getElementById("cabecalhoTabela");

const corpo =
document.getElementById("corpoTabela");

const colunas =
Object.keys(dados[0]);

let linhaCabecalho = "<tr>";

colunas.forEach(coluna => {

    linhaCabecalho +=
    `<th>${coluna}</th>`;

});

linhaCabecalho += "</tr>";

cabecalho.innerHTML =
linhaCabecalho;

dados.forEach(item => {

    let linha = "<tr>";

    colunas.forEach(coluna => {

        linha +=
        `<td>${item[coluna]}</td>`;

    });

    linha += "</tr>";

    corpo.innerHTML += linha;

});

function editarDados() {

    alert(
        "A tela de edição será criada na próxima etapa."
    );

}

function iniciarAutomacao() {

    window.location.href =
    "automacao.html";

}