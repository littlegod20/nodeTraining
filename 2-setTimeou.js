console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

// Note that, the setTimeout is an asynchronous function so it gets offloaded to the system's kernel so that immediate tasks are completed, then the event loop gets back to it.
