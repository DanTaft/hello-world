let adjective = "amazing";
let noun = "cat";
let verb = "jumping";
let place = "Mcdonnalds";
let adjective2 = "large";
let noun2 = "hamburger";

let firstStory = "Once upon a time, there was a" +
    (["a", "e", "i", "o", "u"].includes(adjective[0].toLowerCase()) ? "n " : " ") +
    adjective + " " +
    noun + " who loved to eat " +
    noun2 + ". The " +
    noun + " lived in a " +
    place + " and had " +
    adjective2 + " nostrils that blew fire when it was " +
    verb + ".";
console.log("First story: " + firstStory);

adjective = "unbelievable";
noun = "dog";
verb = "barking";
place = "park";
adjective2 = "bright";
noun2 = "bugs";

let secondStory = "Once upon a time, there was a" +
    (["a", "e", "i", "o", "u"].includes(adjective[0].toLowerCase()) ? "n " : " ") +
    adjective + " " +
    noun + " who loved to eat " +
    noun2 + ". The " +
    noun + " lived in a " +
    place + " and had " +
    adjective2 + " nostrils that blew fire when it was " +
    verb + ".";
console.log("Second story: " + secondStory);