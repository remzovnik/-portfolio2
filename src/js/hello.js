export default class Typer {
  constructor(element, words) {
    this.words = words;
    this.element = element;
  }
  init() {
    this.words.forEach((element, i) => {
      if (i == 0) {
        this.typing(element);
      } else {
        setTimeout(() => {
          this.typing(element);
        }, i * element.length * 500 * 2);
      }
    });
  }
  reset() {
    this.element.textContent = '';
    setTimeout(() => {
      this.init();
    }, 1000);
  }
  typing(line) {
    var i = 0;
    var typingId = setInterval(() => {
      if (i < line.length) {
        this.element.textContent += line[i];
        i++;
      } else {
        clearInterval(typingId);
      }
    }, 200);
  }
}
