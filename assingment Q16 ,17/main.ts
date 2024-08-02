//Q 16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinne


let guestlist  :string[] = ["hammad ali" , "shehbaz", "sami"];
let absentguest = "hammad ali";
let newGuest = "ahmad ali";
 guestlist [0] = newGuest;
 

    console.log("Good News , we found abigger dinner table so we invite 3 more guest");

    guestlist.unshift("naveed ahmad");
    guestlist.splice(2,0,"feroz");
    guestlist.push("hammad ali");

    for (let i =0; i < guestlist.length; i++) {
        console.log ("Dear Mr\n" ,guestlist[i] , "\nIt is our pleasure to Invite you to dinner \n Thank you");
  
   } 


   //Q 17

   
let guestlist  :string[] = ["hammad ali" , "shehbaz", "sami"];
let absentguest = "hammad ali";
let newGuest = "ahmad ali";
 guestlist [0] = newGuest;
 

    

    guestlist.unshift("naveed ahmad");
    guestlist.splice(2,0,"feroz");
    guestlist.push("hammad ali");

    
     
      console.log("sorry we can't arrang a bigger dinerr table so only two guest are invited")
       
      while (guestlist.length<2) {
        let removeGUEST= guestlist.pop();

        console.log(removeGUEST,"sorry you are not invited to dinner");
      }

      for (let i= 0; i < guestlist.length;i ++)  {

        console.log("dear Mr \n" ,guestlist[i] ,"\nyou are still invited to dinner\n thank you");

      }
      guestlist.splice(0,2);

      console.log(guestlist);
      
