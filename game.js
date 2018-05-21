$(document).ready(function () {

    alert("working?");







    resetnumbers = function () {
        randomnumber = Math.floor(Math.random() * 21) + 20;
        $('#randomnumber').html(randomnumber);

        buttonrandom1 = Math.floor(Math.random() * 11);
        buttonrandom2 = Math.floor(Math.random() * 11);
        buttonrandom3 = Math.floor(Math.random() * 11);
        buttonrandom4 = Math.floor(Math.random() * 11);
        console.log(buttonrandom1);
        console.log(buttonrandom2);
        console.log(buttonrandom3);
        console.log(buttonrandom4);

        totalscore = 0;

    }

    resetgame = function () {
        wins = 0;
        losses = 0;
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("p").html("NEW ROUND!");
    }




    resetnumbers();



    $("#first").on("click", function () {
        $("#totalscore").html(totalscore = totalscore + buttonrandom1);
        haha();
    });

    $("#second").on("click", function () {
        $("#totalscore").html(totalscore = buttonrandom2 + totalscore);
        haha();
    });

    $("#third").on("click", function () {
        $("#totalscore").html(totalscore = buttonrandom3 + totalscore);
        haha();
    });

    $("#fourth").on("click", function () {
        $("#totalscore").html(totalscore = buttonrandom4 + totalscore);
        haha();
    });

    wins = 0;
    losses = 0;

    var haha = function () {



        if (totalscore === randomnumber) {
            console.log("garp");
            ++wins;
            $("#wins").html(wins);
            alert("CONGRATULATIONS! KEEP IT UP!");
            resetnumbers();
            
        }


        else if (totalscore > randomnumber) {
            ++losses;
            $("#losses").html(losses);
            alert("Try AGAIN!");
            resetnumbers();

        }


        if (losses === 4) {
            $("p").html("you lose you lose you lose you lose");
            alert("YOU LOST!");
            resetgame();
            resetnumbers();
        }

        if (wins === 4) {
            $("p").html("YOU WIN YOU WIN YOU WIN YOU WIN YOU WIN YOU WIN");
            alert("YOU WON!");
            resetgame();
            resetnumbers();
        }
    }

});
 //   $("#first") = 0 + buttonrandom1;
//    $("#second") = 0 + buttonrandom2;
 //  $("#third") + buttonrandom3;
   // $("#fourth") + buttonrandom4;


//    $("#first").on("click", function(){
  //      $("#totalscore").html(totalscore + (this));

    //var buttonrandom1 = Math.floor(Math.random() * 11);
    //var buttonrandom2 = Math.floor(Math.random() * 11);
    //var buttonrandom3 = Math.floor(Math.random() * 11);
    //var buttonrandom4 = Math.floor(Math.random() * 11);

   // console.log(buttonrandom1);

        //console.log("totalscore");



//    var buttons = [$("#first"), $("#second"), $("#third"), $("#fourth")]
  //      console.log(buttons);
    //    console.log([2]);
      //  console.log([1]);

//    var buttonchoice = function (){
  //     $(buttons).on("click" + (this) + totalscore);
    //   console.log(totalscore + "totalscore");








    //function (){
    //$("#fourth") $("#third") $("#second") $("#first").on("click", function(){
    //var buttons = [$("#first"),$("#second"),$("#third"),$("#fourth")];




    //var buttons = [$("#first"),$("#second"),$("#third"),$("#fourth")];
    //var buttonrandom1 = $("#first");
    //var buttonrandom2 = $("#second");
   // var buttonrandom3 =$("#third");
  //  var buttonrandom4 = $("#fourth");


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

