function abrirProjeto(id){

    document
        .getElementById(id)
        .style.display = "block";

    document
        .getElementById(id)
        .scrollIntoView({
            behavior:"smooth"
        });
}

function fecharProjeto(id){

    document
        .getElementById(id)
        .style.display = "none";
}