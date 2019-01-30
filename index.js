var ticketNum = 0;

function takeANumber(lineArray){
  // adds name to line
  ticketNum += 1;
  lineArray.push(ticketNum);
    // calculates the person's position in line
  var msg = `Welcome, you are number ${ticketNum}.`
  return msg
}

function nowServing(lineArray){
  if (lineArray.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    var currentCustomer = lineArray.shift()
    // return "Currently serving " + currentCustomer + "."
    return `Currently serving ${currentCustomer}.`
  }
}

var currentLine = function(lineArray){
  if (lineArray.length < 1) {
    return 'The line is currently empty.'
  } else {
    var lineList = "The line is currently: ";
    for (var i = 0; i < lineArray.length; i++){
      lineList = lineList + ( i + 1) + ". " + lineArray[i]
      if (lineArray.length > i + 1 ) {
        lineList = lineList + ', '}
    }
    return lineList
  }
}