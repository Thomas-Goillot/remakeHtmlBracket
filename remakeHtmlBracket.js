function start() {
  document.getElementById("res").value = "";
  var value = document.getElementById("value").value;
  document.getElementById("res").value = remakeBracket(value);
}

function remakeBracket(value) {
  let text = value.replace(/(\[)([^\$"]*)(\])/g, '["$2"]');

  text = text.replace(/(\["")([^\$"]*)(\\"\"])/g, '["$2"]');

  return text;
}
