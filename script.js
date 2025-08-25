function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Prompt user and alert the result
const year = parseInt(prompt("Enter a year:"));
alert(daysOfAYear(year))