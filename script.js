//your JS code here. If required.
functions daysOfAYear(year) {
	  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Non-leap year
  }
}
console.log(2022);

	
}