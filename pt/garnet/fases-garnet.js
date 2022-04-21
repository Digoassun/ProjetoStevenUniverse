function fase2() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'c') {
            alert('As duas conseguem se acalmar');
            location.assign("../fase-2/fase-2.html")
            break;
        } else if (option == 'a' || option == 'b') {
            if (contador >= 1) {
                location.assign("../../defeat-pt.html")
                break;
            } else {
                alert('Opção errada!');
                contador++;
            }

        } else {
            alert("Digite apenas a, b ou c")
        }
    }
}

function fase3() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'b') {
            alert('As duas se conectam sentimentalmente');
            location.assign("../fase-3/fase-3.html")
            break;
        } else if (option == 'a' || option == 'c') {
            if (contador >= 1) {
                location.assign("../../defeat-pt.html")
                break;
            } else {
                alert('Opção errada!');
                contador++;
            }

        } else {
            alert("Digite apenas a, b ou c")
        }
    }
}

function fim() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'c') {
            alert('Reacendendo as chamas do amor, as duas conseguir se fundir novamente, e Garnet consegue mais uma vez aceitar seus sentimentos. Assim, a imagem da Diamante desaparece.');
            location.assign("../../victory-pt.html")
            break;
        } else if (option == 'a' || option == 'b') {
            if (contador >= 1) {
                location.assign("../../defeat-pt.html")
                break;
            } else {
                alert('Opção errada!');
                contador++;
            }

        } else {
            alert("Digite apenas a, b ou c")
        }
    }
}