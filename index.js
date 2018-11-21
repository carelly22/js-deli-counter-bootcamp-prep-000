//create function takeANumber which accepts the current
//line of people, and a new peron's name and the returns a welcome
//message including the new person's position in line
var i = 0;
function takeANumber(currentLine, newPerson){
  currentLine = currentLine.push(newPerson);
  i++;
  console.log(`Welcome, ${newPerson}. You are number ${i} in line.`)
}

function nowServing(currentLine) {
	if (currentLine.length === 0){
		console.log(`The line is currently empty.`);
	}
	else {
		var personServing = currentLine.shift();
		console.log(`Currently serving ${personServing}.`);
		return currentLine;
	}
}
