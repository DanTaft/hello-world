let song = document.getElementById("lyrics");
let sing = () => {
  song.innerHTML =
    verse() + "<br>" + distraction1() + "<br>" + bridge() + "<br><br>" +
    chorus() + "<br>" + distraction2() + "<br>" + bridge() + "<br><br>" +
    verse2() + "<br>" + distraction3() + "<br>" + bridge();
};

let verse = () => {
  return (
    "The ants go marching one by one, hurrah! hurrah!\n" +
    "The ants go marching one by one, hurrah! hurrah!"
  ).replace(/\n/g, "<br>");
};

let chorus = () => {
  return (
    "The ants go marching two by two, hurrah! hurrah!\n" +
    "The ants go marching two by two, hurrah! hurrah!"
  ).replace(/\n/g, "<br>");
};

let verse2 = () => {
  return (
    "The ants go marching three by three, hurrah! hurrah!\n" +
    "The ants go marching three by three, hurrah! hurrah!"
  ).replace(/\n/g, "<br>");
};

let bridge = () => {
  return "Down to the ground, to get out of the rain, hurrah, hurrah";
};

let distraction1 = () => {
  return "The little one stops to tie his shoe, hurrah! hurrah!";
};
let distraction2 = () => {
  return "The little one stops to pick up sticks, hurrah! hurrah!";
};
let distraction3 = () => {
  return "The little one stops to climb a tree, hurrah! hurrah!";
};

document.getElementById("playButton").addEventListener("click", sing);