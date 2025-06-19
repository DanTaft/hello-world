const song = document.getElementById("lyrics");

const verses = [
  { n: "one", action: "tie his shoe" },
  { n: "two", action: "pick up sticks" },
  { n: "three", action: "climb a tree" }
];

const line = (n) => `The ants go marching ${n} by ${n}, hurrah! hurrah!<br>The ants go marching ${n} by ${n}, hurrah! hurrah!`;
const distraction = (action) => `The little one stops to ${action}, hurrah! hurrah!`;
const bridge = "Down to the ground, to get out of the rain, hurrah, hurrah";

const sing = () => {
  song.innerHTML = verses.map(v =>
    `${line(v.n)}<br>${distraction(v.action)}<br>${bridge}`
  ).join("<br><br>");
};

document.getElementById("playButton").addEventListener("click", sing);