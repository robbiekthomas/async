const sentence = "hello there from lighthouse labs \n";
let counter = 0;
for (const char of sentence) {
  counter += 50;
  setTimeout(() => process.stdout.write(char), counter);
}
