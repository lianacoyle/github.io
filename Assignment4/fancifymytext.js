function showAlert() {
    alert("Hello, world!");
  }
  
  function makeTextBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
  }
  
  function setStyles() {
    var inputText = document.getElementById("inputText");
  
    if (document.getElementById("rbFancy").checked) {
      inputText.style.color = "blue";
      inputText.style.textDecoration = "underline";
      inputText.style.fontWeight = "bold";
    } else {
      inputText.style.color = "";
      inputText.style.textDecoration = "";
      inputText.style.fontWeight = "";
    }
  }

  function uppercaseText() {
    var inputText = document.getElementById("inputText");
    var textArray = inputText.value.split(".");
    for (var i = 0; i < textArray.length; i++) {
      var sentence = textArray[i].toUpperCase().trim();
      if (sentence !== "") {
        var words = sentence.split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
        textArray[i] = words.join(" ");
      }
    }
    inputText.value = textArray.join(". ");
  }
  