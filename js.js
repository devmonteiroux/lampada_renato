function changeSrc(id) {
    var imagem=document.getElementById(id);
    if(imagem.alt == "Abrir"){
        imagem.src = "ligada.png";
        imagem.alt = "Fechar";
    }
    else {
        imagem.src = "apagada.png";
        imagem.alt = "Abrir";
    }
}