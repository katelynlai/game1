class Player {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }
}

module.exports = Player;

