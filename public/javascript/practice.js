$(document).ready(function() {
    //Create the trivia questions and answer lists:
    var triviaQuestions = [
      {
        question:
        `"Q1: These people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward.
        The career suited for these people includes any work in the supervisory or leader position. They need to be in control and therefore will not shy from taking the lead. 
        They tend to be a bit aggressive in love and very intent. They are extremely faithful with their partner if they are happy in a relationship.
        They are cold hearted, reckless and ruthless."`,
        answerList: ["Virgo", "Sagittarius", "Aries", "Gemini"],
        answer: 2
      },
  
      {
        question:
        `"Q2: These people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect.
        The career suited for these people are writer, communicator, etc. They hate to follow routines, while jobs with incentives give them a kick. They tend to change jobs frequently as they get bored easily and need challenges in their jobs. 
        These people are supportive partners and are found to be independent, creative and inventive in bed."`,
        answerList: ["Gemini", "Leo", "Aquarius", "Taurus"],
        answer: 0
      },
  
      {
        question: `"Q3: These people are discriminating, obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, obsessive, discriminating, street-smart, detailed and modest people. 
        They are workaholics and overachievers. They tend to over-analyze things and for them work is life. They are intellectual and detached partners who believe in an equal give and take relationship.
         They are introvert, judgmental and people who do not forgive easily ."`,
        answerList: ["Pisces", "Cancer", "Virgo", "Sagittarius"],
        answer: 2
      },
  
      {
        question: `"Q4: These people are organized, respectful, devoted, classy, materialistic, serious, staid, ambitious and practical. They have leadership ability and are extremely ambitious. They have good time management and follow strict timetables. They make good investment decisions and tend to become workaholics due to high ambitions. They are not very sociable people and are strong partners in romantic relationships. They are loyal and work hard to build a strong future. They tend to be emotionally aloof and more practical."`,
        answerList: ["Libra", "Capricorn", "Gemini", "Pisces"],
        answer: 1
      },
  
      {
        question: `"Q5: These People are dreamy, erratic, creative, romantic, compassionate, elusive, imaginative, sensitive and kind people. They follow no routine and take a lot of time to think. They are original in their ideas and are good in areas related to poetry and art. They are deeply and strongly devoted to their partners and will put their partners needs before their own. These people are too sensitive. They may have a low self-esteem, greedy and escapist by nature."`,
        answerList: ["Scorpio", "Pisces", "Taurus", "Leo"],
        answer: 1
      },
  
      {
        question:
          `"Q6: These people are practical, creative, loyal, possessive, temperamental, sensually indulgent, down-to-earth, dependable, persistent and practical. The career suited for these people is any routine job with a stable boss as they are dutiful employees. They are loyal partners, affectionate, possessive and love to demonstrate their love physically. They are really jealous, inflexible and resentful people."`,
        answerList: ["Libra", "Gemini", "Aquarius", "Taurus"],
        answer: 3
      },
  
      {
        question: "Q7: These people are cautious, protective, nurturing, secretive, instinctive, needy, sensitive, funny, empathetic and deeply complex people. They are suited for the business world. They excel in family businesses and like to serve others and take care of others. They do not like working alone. These people love deeply, like to please their partners with their all-consuming love. They are moody and too needy people. They have lot of mood swings as their characteristics are based on emotions.",
        answerList: [
          "Aries",
          "Leo",
          "Pisces",
          "Cancer"
        ],
        answer: 3
      },
  
      {
        question:
          "Q8: These are distinctive, provocative, demanding, goal-oriented, flamboyant, self-made, warm, outgoing, sincere and loyal people. The career suited for them is as a team leader, where they get recognition and are able to work independently. They are faithful partners who demand loyalty from their partners. They are very amorous lovers. They are bossy, conceited, intolerant and have a false pride.",
        answerList: ["Leo", "Taurus", "Capricorn", "Sagittarius"],
        answer: 0
      },
  
      {
        question:
          "Q9: These people are intense, magnetic, erotic, challenging, secretive, powerful, broody, passionate, immovable and penetrating. They love to debate and investigate things over. They cannot ask for help and solve problems and issues themselves. They like to work alone instead of in a team. They are creative, loyal and adventurous partners. They can pick up a vibe from their partner without the partner even knowing. Thus, they are able to give their partner everything they want without ever having to ask. They are jealous, demanding and unreasonable people.",
        answerList: ["Gemini", "Scorpio", "Aries", "Libra"],
        answer: 1
      },
  
    //   {
    //     question:
    //       "Which of these ingredients is absolutely necessary to make a good batch of the popular Chinese dish ‘Kung Pao Chicken’?",
    //     answerList: ["Peanuts", "Eggs", "Lotus Roots", "Fish Sauce"],
    //     answer: 0
    //   },
  
    //   {
    //     question: "Which of these exotic items is not a part of Chinese cuisine?",
    //     answerList: [
    //       "Jellyfish",
    //       "Sea Cucumber",
    //       "Bird's saliva",
    //       "Rhino's horn"
    //     ],
    //     answer: 3
    //   },
  
    //   {
    //     question:
    //       "For the Chinese, this color is associated with death, considered extremely unlucky during the New Year celebrations, and should be rigorously avoided. What color is this?",
    //     answerList: ["Black", "Red", "White", "Green"],
    //     answer: 2
    //   },
  
    //   {
    //     question:
    //       "This Chinese festival falls on the seventh month of the Chinese almanac, when the gates of hell are believed to be opened. The main rituals of this major occult festival are held on the 15th, and it lasts a whole month. Which festival is this?",
    //     answerList: [
    //       "Mid-Autumn Festival",
    //       "Lantern Festival",
    //       "Dragon Boat Festival",
    //       "Spring Festival"
    //     ],
    //     answer: 0
    //   },
  
    //   {
    //     question:
    //       "In the lunar calendar, each year is named after an animal. The Buddha once summoned all living creatures, but only twelve came at his bidding. To mark their faithfulness, he named a year after each one. Which is NOT one of the animals?",
    //     answerList: ["Dog", "Cat", "Rat", "Chinese Dragon"],
    //     answer: 1
    //   },
  
    //   {
    //     question:
    //       "The Chinese always believed that on a map, China looks like this animal. What is the female version of this animal in Chinese?",
    //     answerList: ["Chicken", "Fish", "Chinese Dragon", "Dog"],
    //     answer: 2
    //   }
    ];
  
    //Create undefined relevant variables:
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userChoice;
  
    //Messages shown when answering questions:
    var messages = {
      correct: "Congratulations! That is correct! Woooohooo",
      incorrect: "Sorry bubby, wrong answer :(",
      endTime: "Time's up!",
      finished: "Let's see how you did!"
    };
    $("#startOverBtn").hide();

    $("#startBtn").on("click", function() {
      $(this).hide();
      newGame();
    });
  
    $("#startOverBtn").on("click", function() {
      $(this).hide();
      $("#startOverBtn").hide();
      newGame();
    });
  
    //Function to reset everything:
    function newGame() {
      $("#finalMessage").empty();
      $("#wrong").empty();
      $("#right").empty();
      $("#unanswered").empty();
      currentQuestion = 0;
      correctAnswer = 0;
      incorrectAnswer = 0;
      unanswered = 0;
      newQuestion();
      $("#startOverBtn").hide();
    }
  
    //Display new questions:
    function newQuestion() {
      //Clean last question:
      $("#message").empty();
      $("#correctedAnswer").empty();
      answered = true;
  
      $("#currentQuestion").html(
        "Question " + (currentQuestion + 1) + "/" + triviaQuestions.length
      );
      $(".question").html(
        "<p>" + triviaQuestions[currentQuestion].question + "</p>"
      );
      for (var i = 0; i < 4; i++) {
        var choices = $("<div>");
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice btn-lg btn btn-primary btn-block col");       
        $(".answerList").append(choices);
      }
  
      $(".thisChoice").on("click", function() {
        userChoice = $(this).data("index");
        answerPage();
      });
    }
  
  
    //Display the answers:
    function answerPage() {
      $("#currentQuestion").hide();
      $(".thisChoice").hide();
      $(".question").empty();
  
      var rightAnswerText =
        triviaQuestions[currentQuestion].answerList[
          triviaQuestions[currentQuestion].answer
        ];
      var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
  
      if (userChoice == rightAnswerIndex && answered == true) {
        correctAnswer++;
        $("#message").html(messages.correct);
        $("#message").addClass("messager");
      } else if (userChoice != rightAnswerIndex && answered == true) {
        incorrectAnswer++;
        $("#message").html(messages.incorrect);
        $("#message").addClass("messagew");

        // $("#correctedAnswer").html("The correct answer is: " + rightAnswerText);
      } else {
        unanswered++;
        $("#message").html(messages.endTime);
        $("#correctedAnswer").html("The correct answer is: " + rightAnswerText);
        answered = true;
      }
  
      if (currentQuestion == triviaQuestions.length-1) {
        setTimeout(showscore, 3000);
      } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
      }
    }
  
    //Score:
    function showscore() {
      $("#message").empty();
      $("#correctedAnswer").empty();
      

      $("#finalMessage").html(messages.finished);   
      $("#right").html("Correct Answers: " + correctAnswer);
      $("#right").addClass("right");

    //   $("#correctAnswers").addClass("answerTxt");
      $("#wrong").html("Incorrect Answers: " + incorrectAnswer);
      $("#wrong").addClass("wrong");

    //   $("#unanswered").html("Unanswered: " + unanswered);
      $("#startOverBtn").addClass("reset");
      $("#startOverBtn").show();
      $("#startOverBtn").html("Try Again?");
    }
  });