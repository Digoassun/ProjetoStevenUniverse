function fase2() {

    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Pérola tenta falar com a imagem de Rose na esperança de entender o que está acontencendo');
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
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")
        
    } else if (option == 'c') {
        alert('Pérola continua falando com a imagem enquanto se defende por sua vida');
        location.assign("../fase-3/fase-3.html")

    } else {
        alert("Digite apenas a, b ou c")
    }

}

function fim() {
    var option = (prompt("Digite a opção pela letra").toLowerCase());
    if (option == 'a') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")
        
    } else if (option == 'b') {
        alert('Pérola percebe que seu amor por Rose não pode ser posto em cheque por não ter consguido defendê-la no passado. A imagem desaparece.');
        location.assign("../../victory-pt.html")
        
    } else if (option == 'c') {
        alert('Opção errada!');
        location.assign("../../defeat-pt.html")
        
    } else {
        alert("Digite apenas a, b ou c")
    }
    

}
