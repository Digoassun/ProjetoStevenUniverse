function fase2() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'a') {
            alert('Pérola tenta falar com a imagem de Rose na esperança de entender o que está acontencendo');
            location.assign("../fase-2/fase-2.html")
            break;
        } else if (option == 'b' || option == 'c') {
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

function fase3() {
    var contador = 0;
    while (true) {
        var option = (prompt("Digite a opção pela letra").toLowerCase());

        if (option == 'c') {
            alert('Pérola continua falando com a imagem enquanto se defende por sua vida');
            location.assign("../fase-3/fase-3.html")
            break;
        } else if (option == 'a' || option == 'b') {
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

        if (option == 'b') {
            alert('Pérola percebe que seu amor por Rose não pode ser posto em cheque por não ter consguido defendê-la no passado. A imagem desaparece.');
            location.assign("../../victory-pt.html")
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