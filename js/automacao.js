const etapas = [

    "📄 Planilha localizada",

    "📦 50 produtos identificados",

    "🔍 Consultando cadastro fiscal",

    "📑 Validando tributação",

    "💰 Calculando valores",

    "🧾 Montando nota fiscal",

    "📥 Gerando PDF",

    "✅ Processo concluído"

];

const logs =
document.getElementById("logs");

const barra =
document.getElementById("barra");

const porcentagem =
document.getElementById("porcentagem");

let etapaAtual = 0;

function executarAutomacao() {

    if (etapaAtual < etapas.length) {

        const linha =
        document.createElement("p");

        linha.innerText =
        etapas[etapaAtual];

        logs.appendChild(linha);

        const progresso =
        ((etapaAtual + 1) / etapas.length) * 100;

        barra.style.width =
        progresso + "%";

        porcentagem.innerText =
        Math.round(progresso) + "%";

        etapaAtual++;

        setTimeout(
            executarAutomacao,
            1200
        );

    } else {

        setTimeout(() => {

            window.location.href =
            "revisao.html";

        }, 2000);

    }

}

window.onload =
executarAutomacao;