// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// Write the function to find the quarterOf obtained.
const quarterOf = (month) => {
    //your code here
    var quarter
    if (month < 4)
      quarter = 1;
    else if (month < 7)
      quarter = 2;
    else if (month < 10)
      quarter = 3;
    else if (month < 13)
      quarter = 4;
    return quarter
  }

//Use SpecRunner to check the Test Cases.