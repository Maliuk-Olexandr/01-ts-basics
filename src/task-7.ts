
function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("----- Task 7 -----");
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));


