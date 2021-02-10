// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:


// Write the function to find the calculateTip obtained.
function calculateTip(amount, rating) {
    //your code here
    rating=rating.toLowerCase()
    switch(rating){
      case "terrible" : return 0
      case "poor" : return Math.round((5/100)*amount)
      case "good" : return Math.round((10/100)*amount)
      case "great" : return Math.round((15/100)*amount)
      case "excellent" : return Math.round((20/100)*amount)
      default : return "Rating not recognised"
    }
  }

//Use SpecRunner to check the Test Cases.