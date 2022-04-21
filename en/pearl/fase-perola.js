function fase2() {
    var contador = 0;
    while (true) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'a') {
            alert("Pearl tries to talk to Rose's mirage,and tries to understand what's going on.");
            location.assign("../fase-2/fase-2.html")
            break;
        } else if (option == 'b' || option == 'c') {
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

        if (option == 'c') {
            alert('Pearl continues to speak to the image as she defends herself for her life');
            location.assign("../fase-3/fase-3.html")
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

function fim() {
    var contador = 0;
    while (true) {
        var option = (prompt("Type option by the letter").toLowerCase());

        if (option == 'b') {
            alert("Pearl realizes that her love for Rose can't be put in check for not having been able to defend her in the past. The image disappears.");
            location.assign("../../victory-en.html")
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