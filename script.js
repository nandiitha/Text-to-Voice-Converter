let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i); // Create a new option element
    voiceSelect.add(option); // Append the option to the dropdown
  });
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
