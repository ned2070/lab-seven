
// FUNCTION getName() //

function getName() {

let customer = prompt("What's your name?");

let reply = "Welcome, " + customer + "! ";

document.write(reply);

}


// FUNCTION getTime() //

function getTime() {

    // Declare variables//

    let message;

    // Prompt user for time //
    function askTime() {
    
    time = prompt("What hour is it? (24 hour clock please)");

    }


    askTime ();

   //  Check that input value for time is a positive number //

   if (isNaN(time) || time<0) {window.alert("Please give a number 0-24");
                
        askTime();
                  }    


    // Select response //

    if (time < 8) { message = "We don't open until 8 o'clock, enjoy looking at our goods until then.";
            
            } else if (time > 24) { message = "I don't recognise that time but we're open 8 am to 9 pm.";
        
            } else if (time > 21) { message = "Sorry we closed at 9 o'clock, these wonderful products could have been yours.";
        
            } else if (time <= 21) { message = "We're open! Spend to your heart's content!";
        
            } else { message = "I don't recognise that time but we're open 8 am to 9 pm";
        
            }
        
        window.alert(message);
        
}

