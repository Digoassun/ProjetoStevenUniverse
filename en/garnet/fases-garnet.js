function fase2() {
    var contador = 0;
    while (true) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'c') {
            alert('They manage to calm down.');
            location.assign("../fase-2/fase-2.html")
            break;
        } else if (option == 'a' || option == 'b') {
            if(contador>=1){
                location.assign("../../defeat-en.html")
                break;
            }else{
            alert('Wrong option!');
            contador++;
            }

        } else {
            alert("Type only a, b or c")
        }
    }
}

function fase3() {
    var contador = 0;
    while (true) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'b') {
            alert('They connect in a sentimental level');
            location.assign("../fase-3/fase-3.html")
            break;
        } else if (option == 'a' || option == 'c') {
            if(contador>=1){
                location.assign("../../defeat-en.html")
                break;
            }else{
            alert('Wrong option!');
            contador++;
            }
        } else {
            alert("Type only a, b or c")
        }
    }
}

function fim() {
    var contador = 0;
    while (true) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'c') {
            alert('Relighting the flames of love, the two are able to merge again, and Garnet is able to once again accept her feelings. Thus, the mirage of Diamond disappears.');
            location.assign("../../victory-en.html")
            break;
        } else if (option == 'a' || option == 'b') {
            if(contador>=1){
                location.assign("../../defeat-en.html")
                break;
            }else{
            alert('Wrong option!');
            contador++;
            }
        } else {
            alert("Type only a, b or c")
        }
    }
}