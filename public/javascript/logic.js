var questions = [`"These people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward.
The career suited for these people includes any work in the supervisory or leader position. They need to be in control and therefore will not shy from taking the lead. 
They tend to be a bit aggressive in love and very intent. They are extremely faithful with their partner if they are happy in a relationship.
They are cold hearted, reckless and ruthless."`,`"These people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect.
 The career suited for these people are writer, communicator, etc. They hate to follow routines, while jobs with incentives give them a kick. They tend to change jobs frequently as they get bored easily and need challenges in their jobs. 
 These people are supportive partners and are found to be independent, creative and inventive in bed."`,`"These people are discriminating, obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, obsessive, discriminating, street-smart, detailed and modest people. 
 They are workaholics and overachievers. They tend to over-analyze things and for them work is life. They are intellectual and detached partners who believe in an equal give and take relationship.
  They are introvert, judgmental and people who do not forgive easily ."`]

var start = (`<button type='button' class='startbtn btn-seconday' id="start">Start</button>`)

var correct = 0;

$("#no").hide();
$("#yes").hide();

  $("#game").html(start);

  $("#start").click(function(){

  function startGame(){
   
    $("#no").show();
    $("#yes").show();
    $("#game").html(questions[0]);
  }


  startGame();

});

//   startGame();
  

 // $( questions ).each(function( index ) {
    //     console.log( index + ": " + $( this ).text() );
    //   });
    // var text ="";
    // var i;
    //     for (i = 0; i < questions.length; i++) { 
    //     text += questions[i] + "<br>";
    
    //         console.log(text);

    //     $("#game").html(questions[i]);

    //     console.log(i);
// }


_t.questions = [{
    question:`"These people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward.
    The career suited for these people includes any work in the supervisory or leader position. They need to be in control and therefore will not shy from taking the lead. 
    They tend to be a bit aggressive in love and very intent. They are extremely faithful with their partner if they are happy in a relationship.
    They are cold hearted, reckless and ruthless."`,
    choices: ["Virgo", "Sagittarius", "Aries", "Gemini"],
    correct: 2
}, {
    question: `"These people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect.
    The career suited for these people are writer, communicator, etc. They hate to follow routines, while jobs with incentives give them a kick. They tend to change jobs frequently as they get bored easily and need challenges in their jobs. 
    These people are supportive partners and are found to be independent, creative and inventive in bed."`,
    choices: ["Gemini", "Leo", "Aquarius", "Taurus"],
    correct: 0

}, {
    question: `"These people are discriminating, obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, obsessive, discriminating, street-smart, detailed and modest people. 
    They are workaholics and overachievers. They tend to over-analyze things and for them work is life. They are intellectual and detached partners who believe in an equal give and take relationship.
     They are introvert, judgmental and people who do not forgive easily ."`,
    choices: ["Pisces", "Cancer", "Virgo", "Sagittarius"],
    correct: 2

}];