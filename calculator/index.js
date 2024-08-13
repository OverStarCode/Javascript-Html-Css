var CalculatorInput = document.querySelector("#equation");

var Allbuttons = document.querySelectorAll(".calculator-buttons button")


CalculatorInput.addEventListener("keydown", function(e) {
   
    if (
      (e.key >= "0" && e.key <= "9") ||
      e.key === "." ||
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Enter" ||
      e.key === "Tab" ||
      e.key === "%" ||
      e.key === "*"||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "Shift" ||
      e.key === "-" ||
      e.key === "."
   
    ) {
        e.preventDefault();

        // Add the key pressed to the input field

        if(
            (e.key >= "0" && e.key <= "9") ||
             e.key === "." ||
   
            e.key === "*"||
            e.key === "/" ||
            e.key === "+" ||
            e.key === "-"
        ){
            CalculatorInput.value += e.key;

        }
        if(e.key === "Delete"){
            CalculatorInput.value = CalculatorInput.value.slice(0, -1);
        }


    

    }else{
        // Disallow non-numeric keys
        e.preventDefault();
        alert("Only numbers, *, /, +, and - are allowed.");
    }
});

Allbuttons.forEach(function(ee){

    ee.addEventListener("click", function(e){

        if(e.target.textContent === "AC"){
            CalculatorInput.value = "";
        }else if(e.target.textContent === "Del"){
            CalculatorInput.value = CalculatorInput.value.slice(0, -1);
        }
        else if(e.target.textContent === "="){
            console.log(CalculatorInput.value)
            try {
                var result = eval(CalculatorInput.value);
                CalculatorInput.value = result;
            } catch (error) {
                CalculatorInput.value = "Error";
                setTimeout(function(){
                    CalculatorInput.value = "";
                })
            }
        }else{
            CalculatorInput.value += e.target.textContent;

        }

    })
 
})