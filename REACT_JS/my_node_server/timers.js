function simpleTimeout(consoleTimer) {
  console.timeEnd(consoleTimer);
}
console.time("Two second");
setTimeout(simpleTimeout, 2000, "Two second");
console.time("One second");
setTimeout(simpleTimeout, 1000, "One second");
console.time("Three second");
setTimeout(simpleTimeout, 3000, "Three second");
console.time("50 Millisecond");
setTimeout(simpleTimeout, 50, "50 Millisecond");
