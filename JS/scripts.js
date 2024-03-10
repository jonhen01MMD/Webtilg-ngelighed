var isSpeaking = false;
var currentSpeakingButtonId = null;

function showWorldGoals() {
    var worldGoals = document.getElementById('WebTools');
    if (worldGoals.style.display === 'block') {
        worldGoals.style.display = 'none';
    } else {
        worldGoals.style.display = 'block';
    }
}


//DanskStemme funktion
function toggleSpeaking(buttonId, textId) {
    var button = document.getElementById(buttonId);
    if (!isSpeaking) {
      var textToRead = document.getElementById(textId).textContent;
      var msg = new SpeechSynthesisUtterance(textToRead);
      msg.lang = 'da-DK';
      msg.onend = function(event) {
        isSpeaking = false;
        button.textContent = 'Læs op'; // Opdater knappens tekst
      };
      window.speechSynthesis.speak(msg);
      isSpeaking = true;
      button.textContent = 'Stop'; // Opdater knappens tekst
      currentSpeakingButtonId = buttonId;
    } else {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      if (currentSpeakingButtonId) {
        document.getElementById(currentSpeakingButtonId).textContent = 'Læs op';
      }
      button.textContent = 'Læs op'; // Opdater knappens tekst
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-aloud').forEach(button => {
      button.addEventListener('click', function() {
        var textId = this.getAttribute('data-id');
        var buttonId = this.getAttribute('id');
        toggleSpeaking(buttonId, textId);
      });
    });
  });
  

  function changeFontSize(amount) {
    var textElements = document.querySelectorAll('.brødtekst');
    
    textElements.forEach(function(element) {
      var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
      var currentSize = parseFloat(style);
      element.style.fontSize = (currentSize + amount) + 'px';
    });
  }
  
  function increaseFontSize() {
    changeFontSize(1); // Forstørrer med 1px
  }
  
  function decreaseFontSize() {
    changeFontSize(-1); // Formindsker med 1px
  }
  

// Webpage farve
  document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
  });
  