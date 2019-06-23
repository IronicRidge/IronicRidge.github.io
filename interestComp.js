function calculate(event) {

	var firstNum = parseFloat(document.getElementById("inde").value);
	var secondNum = parseFloat(document.getElementById("prate").value);
	var thirdNum = parseFloat(document.getElementById("ty").value);
    var fourthNum = parseFloat(document.getElementById("tc").value);
    if(firstNum < 0 || secondNum < 0 || thirdNum < 0 || fourthNum < 0)
    {
    	result = "Values must be greater than or equal to zero."
    }
    else
    {
	console.log(firstNum, secondNum, thirdNum, fourthNum)
    result = "$" + Math.round((firstNum*Math.pow(1+(secondNum/fourthNum), thirdNum*fourthNum))*100)/100;
    //result = "$" + Math.round(fifthNum*100)/100;
   }
	// window.alert(result);


    document.getElementById("result").innerHTML = result;
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', calculate);