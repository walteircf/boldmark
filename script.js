function addMarkers(openTag, closeTag) {
  var textarea = document.getElementById("myTextarea");
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  if (start !== end) {
    var selectedText = textarea.value.substring(start, end);
    var newText = textarea.value.substring(0, start) +
      openTag + selectedText + closeTag +
      textarea.value.substring(end);
    textarea.value = newText;
  }

  updatePreview();
}

function addLiteralText(literalText) {
  var textarea = document.getElementById("myTextarea");
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  var selectedText = textarea.value.substring(start, end);
  var newText = textarea.value.substring(0, start) +
    literalText + selectedText +
    textarea.value.substring(end);
  textarea.value = newText;

  updatePreview();
}

function updatePreview() {
  var previewDiv = document.getElementById("preview");
  var textarea = document.getElementById("myTextarea");
  var text = textarea.value;

  // Substitui os marcadores pelos equivalentes de estilo HTML
  var htmlText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>')
    .replace(/\{\{italicValue@open\}\}(.*?)\{\{italicValue@close\}\}/g, '<em>$1</em>');

  // Adiciona quebra de linha como <br> se o checkbox estiver marcado
  if (document.getElementById("newlineCheckbox").checked) {
    htmlText = htmlText.replace(/\\n/g, '<br>');
  }

  previewDiv.innerHTML = htmlText;
  previewDiv.style.display = 'block';
}

function checkEnter(event) {
  if (event.key === "Enter" && document.getElementById("newlineCheckbox").checked) {
    var textarea = document.getElementById("myTextarea");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;

    var newText = textarea.value.substring(0, start) + "\\n" + textarea.value.substring(end);
    textarea.value = newText;

    // Impede a ação padrão do Enter (adicionar nova linha)
    event.preventDefault();
  }
}