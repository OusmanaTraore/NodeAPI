const text = "I image JavaScript";

const shout = text.replace(/\b(\w+)$/u, (pattern, lang) => {
  return lang.toLocaleUpperCase();
});

console.log(shout);
