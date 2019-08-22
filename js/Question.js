
export default function Question(question, choices, answerKey) {
  this.question = question;
  this.choices = choices;
  this.answerKey = answerKey;
};

Question.prototype.isCorret = function (guessKey) {
  return guessKey === this.answerKey;
}