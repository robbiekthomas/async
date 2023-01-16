const spinner = [
  "\r|     ",
  "\r/     ",
  "\r-     ",
  "\r\\     ",
  "\r|     ",
  "\r/     ",
  "\r-     ",
  "\r\\     ",
  "\r|     \n",
];
let time = -100;
for (let spin of spinner) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(spin);
  }, time);
}
