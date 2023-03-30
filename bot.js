document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
      if (e.code === "Enter") {
          console.log("You pressed the enter button!")
      }
    });
  });
  const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
  });
  function output()
{
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
        …     
     
     text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
   .replace(/ please/g, "");
  } 
  const utterances = [ 
    ["how are you", "how is life", "how are things"],        //0
    ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
    ["what are you doing", "what is going on", "what is up"],      //2
    ["how old are you"],					//3
    ["who are you", "are you human", "are you bot", "are you human or bot"],   //4
    
     …
   
  ;
   
  // Possible responses corresponding to triggers
   
  const answers = [
     [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],                                                                                  	//0
    [
      "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
    ],						//1
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],						//2
    ["I am infinite"],					//3
    ["I am just a bot", "I am a bot. What are you?"],	//4
    
    …
   
  ];
   
  // For any other user input
   
  const alternatives = [
    "Go on...",
    "Try again",
  ];