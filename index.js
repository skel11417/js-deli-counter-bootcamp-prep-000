function takeANumber(lineArray, newName){
  // adds name to line
  lineArray.push(newName)
  // calculates the person's position in line
  var linePosition = lineArray.indexOf(newName) + 1
  var msg = `Welcome, ${newName}. You are number ${linePosition} in line.`
  return msg
}

function nowServing(lineArray){
  if (lineArray.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    var currentCustomer = lineArray.shift()
    return "Currently serving " + currentCustomer + "."
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