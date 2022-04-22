function game(idioma) {
  location.assign(`./${idioma}/intro/intro-${idioma}.html`);
}

function backIndex() {
  location.assign('../index.html')
}

function backChoice(idioma) {
  location.assign(`./choice/choice-${idioma}.html`)
}

function startGame(idioma) {
  location.assign(`../choice/choice-${idioma}.html`);
}

function charSelection(char) {
  location.assign(`../${char}/fase-1/fase-1.html`);
}

function fase(certa, msgCerta, proxima, respostaErrada1, respostaErrada2,lose,optionP,alert1,alert2) {
  var contador = 0;
  while (true) {
    var option = (prompt(optionP).toLowerCase());

    if (option == certa) {
      alert(msgCerta);
      location.assign(proxima)
      break;
    } else if (option == respostaErrada1 || option == respostaErrada2) {
      if (contador >= 1) {
        location.assign(lose)
        break;
      } else {
        alert(alert1);
        contador++;
      }

    } else {
      alert(alert2)
    }
  }
}

