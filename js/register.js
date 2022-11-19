

//     console.log(Lname);
//     let len=0,aplh=0,sp=0,num=0,i;
//     for ( i = 0; i < pass.length; i++)
//     {
//         if (pass[i]>48&&pass[i]<57)
//         {
//            num++;
//         }
//         else if(pass[i]>65&&pass[i]<90)
//         {
//             aplh++;
//         }
//        // else{
//           //  sp++;
//        // }

//     }

//    if(num>0&&aplh>0)

//    {
//      location.href="./form_action.html";
//    }
//    else{
//     location.href="./register.html";
//     alert("enter correct password");
//    }



function myfunction(){   var x = document.getElementById("lname");
 if(x.type === "password"){
      x.type = "text";

   }
   else{
       x.type = "password"
   }
 }