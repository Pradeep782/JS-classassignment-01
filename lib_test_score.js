const Scores = {
  scores: [],
  length: 0,
  total: 0,
  avg: 0.0,
  lastThreeScores: [],
  add: function (score) {
    if (isNaN(score) || score < 0 || score > 100) {
      throw new Error(
        "Please enter a valid score, must be a numeric between 0 and 100."
      );
    } else {
      this.scores.push(score);
      this.total = this.scores.reduce((tot, val) => tot + val, 0);
      this.length = this.scores.length;
      const len = this.scores.length;
      this.avg = this.total / len;
      const tempScores =
        len <= 3 ? this.scores.slice() : this.scores.slice(len - 3, len);
      tempScores.reverse();
      this.lastThreeScores = tempScores;
    }
  },
  toString: function () {
    return this.scores.join(", ");
  },
};
