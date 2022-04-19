function fase2() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'a') {
            alert('Ametista pegou seu chicote, e correu para atacar a imagem!');
            location.assign("../fase-2/fase-2.html")
            break;
            
        } else if (option == 'b' || option == 'c') {
            
            var qualquer =error("../../defeat-pt.html",contador)
            if(qualquer) break;
            contador++
            
        }else {
            alert("Digite apenas a, b ou c")
        }
    }
}

function fase3() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'b') {
            alert('Ametista consegue reunir forças para lidar com a imagem!');
            location.assign("../fase-3/fase-3.html")
            break;
        } else if (option == 'a' || option == 'c') {
            if(contador>=2){
                location.assign("../../defeat-pt.html")
                break;
            }else{
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

        if (option == 'a') {
            alert('Tendo acreditado em Steven, Ametista consegue lidar com sua insegurança, resultando no sumiço da imagem!');
            location.assign("../../victory-pt.html")
            break;
        } else if (option == 'b' || option == 'c') {
            if(contador>=2){
                location.assign("../../defeat-pt.html")
            }else{
            alert('Opção errada!');
            contador++;
            }

        } else {
            alert("Digite apenas a, b ou c")
        }
    }
}

function error(pagina,contador){

    if(contador>=2){
        location.assign(pagina)
        return true
    }else{
        alert('Opção errada!');
        return false
    }
}

