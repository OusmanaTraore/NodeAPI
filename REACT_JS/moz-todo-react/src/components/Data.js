function Data(props) {
  const hours =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();
  const minutes =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  const secondes =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
  const jour =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  const mois =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const annee =
    new Date().getFullYear() < 10
      ? "0" + new Date().getFullYear()
      : new Date().getFullYear();
  const aujDay = jour + "/" + mois + "/" + annee;

  const aujHeure = hours + ":" + minutes + ":" + secondes;
  // return setTimeout(() => {
  return `
    ${aujDay}
    
    ${aujHeure}
  `;
  // }, 1000);
}
export default Data;
