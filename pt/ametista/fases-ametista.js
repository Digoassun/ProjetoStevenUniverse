function fase2() {

    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Ametista escolheu a arma certa, e corre para atacar a imagem!');
        location.assign("../fase-2/fase-2.html")

    } else if (option == 'b') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else if (option == 'c') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else {
        alert("Digite apenas a, b ou c")
    }

}

function fase3() {

    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else if (option == 'b') {
        alert('Ametista consegue reunir forças para lidar com a imagem!');
        location.assign("../fase-3/fase-3.html")

    } else if (option == 'c') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else {
        alert("Digite apenas a, b ou c")
    }

}

function fim() {
    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Ametista e Steven se unem e conseguem lidar com os problemas internos dela, resultando no sumisso da imagem!');
        location.assign("../../victory-pt.html")

    } else if (option == 'b') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else if (option == 'c') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")

    } else {
        alert("Digite apenas a, b ou c")
    }
    

}

