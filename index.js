//create function takeANumber which accepts the current
//line of people, and a new peron's name and the returns a welcome
//message including the new person's position in line
const katzDeli = [];
var i = 0;
function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  i++;
  console.log(`Welcome, ${newPerson}. You are number ${i} in line.`)
}
