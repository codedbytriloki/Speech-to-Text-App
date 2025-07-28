const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const output = document.getElementById("output");

let recognition;

if('webkitSpeechRecognition' in window ){
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-IN';

  recognition.onresult = (event) => {
    let transcript = "";
    for(let i = event.resultIndex; i < event.results.length; i++){
      transcript += event.results[i][0].transcript;
    }
    output.textContent = transcript;
  }

  recognition.onerror = (e) => {
    output.textContent = "Error: " + e.error;
  }
}else{
  output.textContent = "Sorry your browser doesn't support Speech Recognition."
}
startBtn.addEventListener('click', () => {
  recognition.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
  recognition.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
})