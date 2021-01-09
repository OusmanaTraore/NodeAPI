const weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

for (const day of weekdays) {
  console.log(day);
}
// on obtient le même résultat avec la méthode `forEach`
weekdays.forEach((day) => console.log(day));
