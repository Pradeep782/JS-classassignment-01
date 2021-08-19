// use strict executes the code in strict mode.
"use strict";

// when the windoow is loaded the below code will be excuted.
$(document).ready(() => {
  // adding the click event listener
  $("#add_score").click(() => {
    // storing the value of a score in a variable named score.
    const score = parseFloat($("#score").val().trim());
    // validating the score
    if (isNaN(score) || score < 0 || score > 100) {
      $("#add_score")
        .next()
        .text(
          "Please enter a valid score, must be a numeric between 0 and 100."
        );
      $("#score").focus();
    } else {
      Scores.add(score);
      $("#add_score").next().text("");
      $("#all").text(Scores.scores.join(" - "));
      $("#avg").text(Scores.avg.toFixed(2));
      $("#last").text(Scores.lastThreeScores.join(" - "));
    }
    $("#score").val("");
    // focus method is used to shift the focus on the html element with the id score
    $("#score").focus();
  });
  // focus method is used to shift the focus on the html element with the id score
  $("#score").focus();
});

// Generator Function to yield Iterator
function* GenerateLatestScore() {
  yield* Scores.scores;
}
