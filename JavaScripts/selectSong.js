const song1 = "All My EX's Live in Texas by George Strait";
const song2 = "Somebody That I Used to Know by Gotye";
const song3 = "Free falling by Tom Petty";
const song4 = "Bad Romance by Lady Gaga";
const song5 = "I Will Always Love You by Whitney Houston";

const randomNumber = Math.floor(Math.random() * 5 + 1);

const selectedSong =
  randomNumber === 1 ? song1 :
  randomNumber === 2 ? song2 :
  randomNumber === 3 ? song3 :
  randomNumber === 4 ? song4 :
  song5;

console.log(selectedSong);
