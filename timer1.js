const args = process.argv.slice(2);

const timer1 = (args) => {
  for (let arg of args) {
    if (arg > 0) {
      setTimeout(() => process.stdout.write("\x07"), arg * 1000);
    }
  }
};

timer1(args);
