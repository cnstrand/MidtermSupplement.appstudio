/*
Program 2 

Create a program that calculates body mass index (BMI) for the user.  
Get the users’ height (feet and inches) and weight (pounds). Then tell 
them what their BMI is, and give them a message about their weight as 
indicated by their BMI.

Requirements

Use a function with two parameters to calculate the BMI and pass back 
the answer to the main program.

Calculation must be in the function
Get the users’ height (in inches) and weight (in lbs)
Output must be done outside of the function in the main program.
Use this calculation:
        BMI = (weight/ height2) * 703

        Example: Weight = 150 lbs, Height = 5’5″ (65″)
        Answer = 24.96

For the appropriate category output a message in a popup as shown below 
  using if/else and at least one Boolean operator (eg. && or ||). 

        Underweight = <18.5       “Your BMI is XXX. You are underweight”
        Normal weight = 18.5–24.9   “Your BMI is XXX. You are normal weight”
        Overweight = 25–29.9        “Your BMI is XXX. You are overweight”
        Obesity = BMI of 30 or greater   “Your BMI is XXX. You are obese”

No switch statement may be used
No controls are used.
Use template literal and a popup for all output.
*/

let weight = prompt('Please enter your weight in lbs')
let height = prompt('Please enter your height in inches')

function calcBMI(a, b){
  let BMI = (weight/ (height^2)) * 703
    if (BMI <= 18.5){
      return alert("Your BMI is " + BMI+ ". You are underweight.")
      }
    else if (BMI < 24.9){
      return alert("Your BMI is " + BMI+ ". You are a normal weight.")
      }
    else {
      return alert("Your BMI is " + BMI+ ". You are overweight.")
    }
}

calcBMI(weight, height)









