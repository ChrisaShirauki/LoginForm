


 function showErrors(){
   var username = document.getElementById("user").value;
   var password = document.getElementById("pass").value;
   var errorCounter= 0; 

      // Validation Parameters //
      var camelRegExp= /^[A-Z][a-zA-Z]*$/;  // Camel Case Regular Expression

   if(username.length > 10){
      document.getElementById("errors1").innerHTML= "* Username longer than 10 chars";
      document.getElementById("errors1").style.color = "red";
   }
   else{
    document.getElementById("errors1").style.color = "green";
   }

   // Error 2: Check if username does not contain special numbers or characters
   if( camelRegExp.test(username)){
    document.getElementById("errors2").style.color = "green";
     document.getElementById("errors2").innerHTML ="*Valid Username."
   }
   else{
    document.getElementById("errors2").innerHTML ="*Invalid Username."
    document.getElementById("errors2").style.color = "red";
   }

 }

