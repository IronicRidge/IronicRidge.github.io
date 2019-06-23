

function calculate(event) {

	var firstNum = parseFloat(document.getElementById("fname").value);
	var secondNum = parseFloat(document.getElementById("lname").value);
	var thirdNum = parseFloat(document.getElementById("stax").value);
	thirdNum = thirdNum/100;
	var fourthNum = parseFloat(document.getElementById("objcost").value);
    if(firstNum < 0 || secondNum < 0 || thirdNum < 0 || fourthNum < 0 )
    {
    	result = "Values must be greater than or equal to zero."
    }
    else
    {
	console.log(firstNum, secondNum, thirdNum, fourthNum)
    if(firstNum < secondNum)
    	result = "Monthly income must be greater than living costs"
	    else
	    {
		var result = ((thirdNum*fourthNum)+fourthNum)/(firstNum-secondNum);
		if (result === "Infinity") {
			result = "Not possible, infinity is not a valid result."
		} else {
			if(result < 1)
			{
				result = "Less than 1 month for this purchase if you save all of your disposable income."
			}
			else
			{
			result = Math.round(result) + " months for this purchase if you save all of your disposable income.";
		}
		}
	}
   }
	// window.alert(result);


    document.getElementById("result").innerHTML = result;
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', calculate);