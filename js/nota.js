const dados =
JSON.parse(
    localStorage.getItem("dadosPlanilha")
);

let total = 0;

dados.forEach(item => {

    total += Number(item.Valor);

});

document
.getElementById("quantidadeItens")
.innerText =
dados.length;

document
.getElementById("valorTotal")
.innerText =
"R$ " + total.toFixed(2);

document
.getElementById("dataAtual")
.innerText =
new Date().toLocaleDateString("pt-BR");

function baixarPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let y = 15;

    doc.setFontSize(18);
    doc.text(
        "NOTA FISCAL ELETRONICA",
        20,
        y
    );

    y += 10;

    doc.rect(10, y, 190, 25);

    doc.setFontSize(10);

    doc.text(
        "Numero: 000001",
        15,
        y + 8
    );

    doc.text(
        "Serie: 001",
        15,
        y + 15
    );

    doc.text(
        "Data: " +
        new Date().toLocaleDateString("pt-BR"),
        100,
        y + 8
    );

    y += 35;

    doc.rect(10, y, 190, 25);

    doc.text(
        "EMITENTE",
        15,
        y + 8
    );

    doc.text(
        "Empresa Demonstracao LTDA",
        15,
        y + 16
    );

    doc.text(
        "CNPJ: 12.345.678/0001-99",
        15,
        y + 22
    );

    y += 35;

    doc.rect(10, y, 190, 20);

    doc.text(
        "DESTINATARIO",
        15,
        y + 8
    );

    doc.text(
        "Cliente Demonstracao",
        15,
        y + 16
    );

    y += 30;

    doc.rect(10, y, 190, 10);

    doc.text("Codigo", 15, y + 7);
    doc.text("Produto", 55, y + 7);
    doc.text("Valor", 170, y + 7);

    y += 10;

        dados.forEach(item => {

        if (y > 260) {

            doc.addPage();

            y = 20;
        }

        doc.rect(10, y, 190, 8);

        doc.text(
            String(item.Codigo),
            15,
            y + 5
        );

        doc.text(
            String(item.Produto)
            .substring(0, 30),
            55,
            y + 5
        );

        doc.text(
            "R$ " +
            Number(item.Valor)
            .toFixed(2),
            170,
            y + 5
        );

        y += 8;

    });

        y += 10;

    doc.setFontSize(12);

    doc.text(
        "TOTAL: R$ " +
        total.toFixed(2),
        140,
        y
    );

    y += 20;

    doc.setFontSize(10);

    doc.text(
        "CHAVE DE ACESSO (DEMONSTRACAO)",
        20,
        y
    );

    y += 10;

    doc.text(
        "3526 0000 0000 0000 0000 0000 0000 0000 0000",
        20,
        y
    );

    y += 20;

    doc.setFontSize(14);

    doc.text(
        "SEM VALIDADE FISCAL",
        55,
        y
    );

    doc.save(
        "NF_Demonstracao.pdf"
    );

}

function novaEmissao() {

    window.location.href =
    "dashboard.html";

}

function encerrar() {

    localStorage.clear();

    window.location.href =
    "index.html";

}
