window.addEventListener("load", () => {

    document.getElementById("email").value =
    "financeiro@empresa.com";

    document.getElementById("senha").value =
    "123456";

    setTimeout(() => {

        window.location.href =
        "dashboard.html";

    }, 2000);

});