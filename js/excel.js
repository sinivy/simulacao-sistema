window.addEventListener("load", () => {

    document.getElementById("status").innerHTML =
    "Procurando planilha...";

    setTimeout(() => {

        document.getElementById("barra").style.width =
        "100%";

    }, 100);

    setTimeout(() => {

        document.getElementById("status").innerHTML =
        "✅ Planilha localizada";

        carregarPlanilha();

    }, 2000);

});

async function carregarPlanilha() {

    try {

        const response =
        await fetch("assets/Planilha.xlsx");

        const arrayBuffer =
        await response.arrayBuffer();

        const workbook =
        XLSX.read(arrayBuffer, {
            type: "array"
        });

        const primeiraAba =
        workbook.SheetNames[0];

        const sheet =
        workbook.Sheets[primeiraAba];

        const dados =
        XLSX.utils.sheet_to_json(sheet);

        localStorage.setItem(
            "dadosPlanilha",
            JSON.stringify(dados)
        );

        document.getElementById("status").innerHTML =
        `✅ ${dados.length} produtos carregados`;

        setTimeout(() => {

            window.location.href =
            "dados.html";

        }, 1500);

    }
    catch (erro) {

        console.error(erro);

        document.getElementById("status").innerHTML =
        "❌ Erro ao carregar a planilha";

    }

}