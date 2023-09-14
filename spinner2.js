const spinner = () => {
  const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  let delay = 100;

  for (let i = 0; i < spinnerArray.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArray[i]}     ` + (i === spinnerArray.length - 1 ? '\n' : ''));
    }, delay);
    delay += 200;
  }
};
spinner();