const words=["Hello","Thank You","Good Morning","Friend"];
let i=0;
function nextWord(){i=(i+1)%words.length;document.getElementById('word').innerText=words[i];}
function checkAnswer(){document.getElementById('result').innerText='Great attempt!';}