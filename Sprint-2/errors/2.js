
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(3) {
    return num * num;
}

The reason we are getting an error is because our function is very confusing,  the square function parenthesis  has a value of 3 which was not declared.
 Also we cannot have a value in the parenthesis because we want a function that will square any number that we declare, here is the fixed function below 

function square(num) {


 return num * num;
}

