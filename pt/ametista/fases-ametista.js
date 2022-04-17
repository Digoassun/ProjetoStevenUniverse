function fase2() {

    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Ametista pegou seu chicote, e correu para atacar a imagem!');
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
        alert('Tendo acreditado em Steven, Ametista consegue lidar com sua insegurança, resultando no sumiço da imagem!');
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

