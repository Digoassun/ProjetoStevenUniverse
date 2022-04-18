function fase2() {
    var contador = 0;
    while (contador < 3) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'a') {
            alert('Amethyst grabs her whip, and run to toward the image!');
            location.assign("../fase-2/fase-2.html")
            break;
        } else if (option == 'b' || option == 'c') {
            if(contador>2){
                location.assign("../../defeat-en.html")
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
    while (contador < 3) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'b') {
            alert('Amethyst manages to gather strength to deal with the mirage!');
            location.assign("../fase-3/fase-3.html")
            break;
        } else if (option == 'a' || option == 'c') {
            if(contador>2){
                location.assign("../../defeat-en.html")
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
    while (contador < 3) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'a') {
            alert('Believing in Steven, Amethyst is able to deal with her insecurity, resulting in the mirage disappearing!');
            location.assign("../../victory-en.html")
            break;
        } else if (option == 'b' || option == 'c') {
            if(contador>2){
                location.assign("../../defeat-en.html")
            }else{
            alert('Wrong option!');
            contador++;
            }
        } else {
            alert("Type only a, b or c")
        }
    }
}