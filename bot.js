const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

    const utterances = [
<<<<<<< HEAD
      ["hello", "hi", "good evening"],
      ["how are you", "how are you doing"],
      ["what do you do"],
      ["how old are you"],
      ["where are you from"],
      ["are you a man"],
      ["are you a woman"],
      ["do you know evtim"]
    ];
    
    const answers = [
      ["Hello!", "Hi!", "Good evening!"],
      ["fine, thanks for asking!", "I am doing excellent!"],
      ["I am chatting with you right now!"],
      ["younger than Evtim, he is really old!"],
      ["it's none of your business, curious or what"],
      ["I am everything you want"],
      ["just imagine what i am"],
      ["of course, evtim is my lover"]
=======
      ["hallo", "hi", "guten tag"],
      ["wie geht es dir", "wie geht's"],
      ["was machst du"],
      ["wie alt bist du"],
      ["woher kommst du"],
      ["bist du ein mann"],
      ["bist du eine frau"],
      ["kennst du evtim"]
      ["kennst du peter"]
    ];
    
    const answers = [
      ["Hallo!", "Hi!", "Guten Tag!"],
      ["Mir geht es gut, danke fuers Fragen!", "Mir geht es ausgezeichnet!"],
      ["Ich chatte gerade mit dir!"],
      ["juenger als Evtim, der ist richtig alt!"],
      ["das geht dich nichts an, neugierig oder was"],
      ["ich bin alles was du willst"],
      ["stell dir einfach vor was ich bin"],
      ["na klar, evtim ist mein lover"]
      ["na klar, peter ist mein lover"]
>>>>>>> f7429cc1ed1cad70a15169213f7badba2520aefe
    ];
    
    const alternatives = [
      "Sorry, I did not understand.",
      "Could you please repeat that?",
      "I did not expect that.",
      "Please ask Evtim, unfortunately I do not know that."
    ];


  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}
