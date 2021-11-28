$(document).ready(function(){

  jQuery.validator.addMethod("noSpace", function(value,element){
  return value.indexOf(" ")<  0 && value !="";
},"No space please, Enter...");




   $("#submit-form").validate({

         rules:{
          name:{
                required:true,
                minlength:3,
                noSpace:true
               
                },
                email:{
                  required:true,
                  email:true
                  },
                 PhoneNumber:{
                   required:true,
                   number:true,
                   minlength:10

                 }, 
                
                 message:{ 
                  required:true,
                  minlength:40,
                  noSpace:true
                  

          }  
         }
         })
      })

      $('#submitbutton').on('click', function() {
        $("#submit-form").valid();
    });
  



