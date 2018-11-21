
let num = 0;

function takeANumber(katzDeliLine) {
  //return num;
  //katzDeliLine.push(name);
  katzDeliLine.push(num);
  num++;
  return `Welcome. You are number ${num} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) 
  {
    let first = katzDeliLine.splice(0,1);
    return `Currently serving number ${first}.`; 
  }
  else 
  {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  }
}