let userName : string[] = ["admin", "ahmad","ali","hammad","nasir"];

userName . forEach(username =>{
      if(username === "admin"){
          console.log("Hello",username, "would you like to see a status report?");

    
      }else{
          console.log ("Hello",username, " thank yiou for logging in again.");
      }

})