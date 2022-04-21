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