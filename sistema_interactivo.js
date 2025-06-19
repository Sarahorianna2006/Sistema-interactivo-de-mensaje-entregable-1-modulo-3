//Function that displays a message in both the alert and the console.
function showMessage(text, isError = false) {
    if (isError){
        console.error(text)
    } else {
        console.log(text);
    }
    alert(text);
}

//Welcome message to start the program.
alert("Welcome to our program. Here you can find out whether or not you're of legal age. To do this, we'll ask you for some information. Click Accept to continue 🤗");

//User data capture.
let user_name = prompt("Please enter your name 📌");

while (true){
    if (!isNaN(user_name)){
        showMessage("Error...Please enter a valid name in letters 🚫", true),
        user_name = prompt("Please enter your name again");
    }
    else{
        break;
    }
}

let age = prompt("Please enter your age 📌")

//Wrong age message validations.
while (true){
    if(isNaN(age)){
        showMessage("Error...Please enter a valid age in numbers 🚫", true);
            age = prompt("Please enter your age again 📌");
    }
    else{
        break
    }
}

//Validation to answer whether you are over 18 or not.
while (true){
    if (age < 18){
        showMessage(`Hello ${user_name}, you are a minor 👧👦`);
    }
    else if (age >= 18){
        showMessage(`Hello ${user_name}, you are of legal age👩🧔`);
    }
        break
    }

//Alert messages to create excitement with the user and terminate the program.
showMessage("🎉 ¡Congratulations, you now know if you are an adult or a minor! 🎉");
showMessage("Click accept to exit the program....👋")

window.location.reload()