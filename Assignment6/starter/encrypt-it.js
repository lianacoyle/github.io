/*
 * Starter file 
 */
console.log("Window loaded!");

function handleClick() {
  const inputText = document.getElementById('input-text').value;
  let outputText = '';
  for (let i = 0; i < inputText.length; i++) {
    let currentChar = inputText[i];
    if (currentChar >= 'a' && currentChar <= 'z' || currentChar >= 'A' && currentChar <= 'Z') {
      const charCode = inputText.charCodeAt(i);
      const shiftAmount = 1;
      let newCharCode = charCode + shiftAmount;
      if ((currentChar >= 'A' && currentChar <= 'Z' && newCharCode > 'Z'.charCodeAt(0)) ||
        (currentChar >= 'a' && currentChar <= 'z' && newCharCode > 'z'.charCodeAt(0))) {
        newCharCode -= 26;
      }
      outputText += String.fromCharCode(newCharCode);
    } else {
      outputText += currentChar;
    }
  }
  document.getElementById('result').innerText = outputText;
}
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    var encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
