const song1 = "All My EX's Live in Texas";
const song2 = "Smoking in the Boys Room";
const song3 = "I Want to Break Free";
const song4 = "I Will Survive";
const song5 = "I Will Always Love You";

const randomNumber = Math.floor(Math.random() * 5 + 1);

const selectedSong =
  randomNumber === 1 ? song1 :
  randomNumber === 2 ? song2 :
  randomNumber === 3 ? song3 :
  randomNumber === 4 ? song4 :
  song5;

console.log(selectedSong);
