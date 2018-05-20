$(document).ready(function(){

    alert("working?");

    var resetgame = function(){
        var randomnumber = Math.floor(Math.random() * 21) + 20;
        $('#randomnumber').html(randomnumber);
    }

    resetgame();

    var buttonclick = function(){
        $("#fourth","#third","#second","#first").click() + (this) + $("#totalscore");
        console.log("help")
    }

    

});

    //var buttons = [$("#first"),$("#second"),$("#third"),$("#fourth")];


    // console.log("buttons established")


    // newgame(function() {
    //     buttons.split() = Math.floor(Math.random * 11);
    //     $('#randomnumber').innerhtml(Math.floor(Math.random * 41);
        
    // )}


 

    // $("button").click(function(){
    //     $('#second').hide(3000);
    //     }

    //     $("p").on("click", function(){
    //         $(this).hide();
    //     });




   // $('#randomnumber') + 
    //});
//});



//
///$('#first').click(function(){
   // Math.floor(Math.random * 11);
    //$("#first").hide(3000);






//--
//var wins = 0;
//var losses = 0;

//var randomnumber = $("#randomnumber"); 

//var totalscore = 0;

//
 


//randomnumber = Math.floor(Math.random * 41);
//buttons = Math.floor(Math.random * 11);



//$(buttons).on("click").innerhtml.hide(3000);
    
    //alert("I've been clicked!");

    //for(buttons = 0; i < buttons.length; buttons++){

   // }

