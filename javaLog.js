


 function showErrors(){
   var username = document.getElementById("user").value;
   var password = document.getElementById("pass").value;
  // var flagCounter=0; // If flag =0----> Success Login ||  flag>0  ----> False Login 

      // Validation Parameters //
      var camelRegExp= /^[A-Z][a-zA-Z]*$/;  // Camel Case Regular Expression
      const email ="@gmail.com"; //Parameter that holds the username ending
      var passRegEXP = /[^A-Za-z0-9]/; //Contains special character


      
//FLAG: before any validation fields must be not null 
if ( username.length === 0 || password.length ===0){
   document.getElementById("tag").style.color = "red";
   document.getElementById("errors5").style.color = "red";
   document.getElementById("errors4").style.color = "red";
}
else{
   document.getElementById("tag").style.color = "green";
    //Password Erros 
   // Error 1: Password must be 25 chars 
   if(passRegEXP.test(password)){
      document.getElementById("errors5").style.color = "green";
      
     }
     else{
      document.getElementById("errors5").style.color = "red";
    }
   // Errror 5 : Password must have special char if not 25 then doesnt matters
   if ( password.length !=25){
      document.getElementById("errors4").style.color = "red";
     }
     else{
      document.getElementById("errors4").style.color = "green";
     }
}


//!!!! ALL other errrors must be included by the error 3 because containing an email domain at the end is a significant parameter for the login 

   // Error 3: User name must contain @gmail.com but does not count in the Error 1
  if(username.endsWith(email)){
     username = username.slice(0, username.indexOf(email));
     document.getElementById("errors3").style.color = "green";
     document.getElementById("errors3").innerHTML ="*Username contains email domain."

    // Error 2: Check if username does not contain special numbers or characters
     if(camelRegExp.test(username)){
       document.getElementById("errors2").style.color = "green";
       document.getElementById("errors2").innerHTML ="*Valid Username.";
     }
     else{
      document.getElementById("errors2").innerHTML ="*Username must be in camel case (exp. Fef). "
      document.getElementById("errors2").style.color = "red";
     }

//Error 1: Check if username length less than 10 characters
    if(username.length > 10){
      document.getElementById("errors1").innerHTML= "* Username longer than 10 chars";
      document.getElementById("errors1").style.color = "red";
      return false;
    }
    else{
      document.getElementById("errors1").style.color = "green";
       return true;
    }
  } else {
     document.getElementById("errors3").innerHTML ="*Username must contain email domain."
     document.getElementById("errors3").style.color = "red"
  }
 
}


