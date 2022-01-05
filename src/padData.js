export const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const colors = [
  "blue",
  "orange",
  "red",
  "purple",
  "teal",
  "green",
  "black",
  "brown",
  "magenta",
];

const display = [
  "hi-hat-closed",
  "hi-hat-open",
  "crash",
  "low-tom",
  "high-tom",
  "cow-bell",
  "bass",
  "snare",
  "clap",
];
const padData = [];

for (let i = 0; i < keys.length; i++) {
  let obj = {};
  obj.key = keys[i];
  obj.color = colors[i];
  obj.display = display[i];
  obj.note = `${display[i]}.mp3`;
  padData.push(obj);
}

export default padData;
