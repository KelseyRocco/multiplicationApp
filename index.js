const num1 = Math.floor(Math.random() * 11);
const num2 = Math.floor(Math.random() * 11);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} x ${num2}?`;
