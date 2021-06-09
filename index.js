  // ReadlineSync Library
  const readlineSync = require('readline-sync');
  // Chalk Library
  const chalk = require('chalk');
  // Score initially set to zero
  score = 0;

  // QuestionSet
  const questions = [{
    question: `\n1. What is the Harry Potter's enemy name?
    a. Lord Voldemort
    b. Bellatrix Lestrange
    c. Lucius Malfoy
    d. Petter Pettigrew` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n2. Platform number used by pupils to access Hogwarts Express?
    a. 8 1/4
    b. 9 3/4
    c. 7
    d. 5 3/5` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n3. What is the names of Harry Potter's parents?
    a. Charlie and Lily Potter
    b. James and Lily Potter
    c. James and Hermione Potter
    d. Michael and Lily Potter` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n4. What's the name of Hogwarts school's gamekeeper?
    a. Ralph Hagrid
    b. Ted hanson
    c. Homer
    d. Rubeus Hagrid` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n5. Which is the first wizard sweet Harry Potter eats?
    a. Sherbet Ship
    b. Magic Chocalate Raisins
    c. Chocalate Frog
    d. Magic Almonds` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n6. How many staircases does Hogwarts have?
    a. 142
    b. 150
    c. 163
    d. 121` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n7. What is the name of Neville Longbottom's pet toad called?
    a. Nathaniel
    b. Kevin
    c. Nicholas
    d. Trevor` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n8. What shape scar did Harry Potter have on his Forehead?
    a. Moon shaped
    b. Firebolt
    c. Lightening Bolt
    d. N letter` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n9. In which year Harry Potter was born?
    a. 1991
    b. 1976
    c. 2002
    d. 1980` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n10. On which position did Harry's father played Quidditch?
    a. Seeker
    b. Chaser
    c. Keeper
    d. Bludger` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n11. How many brother and sisters does Ron Weasley have?
    a. 2
    b. 3
    c. 10
    d. 6` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n12. What was the relationship between Sirius Black to Harry Potter? 
    a. Stepfather
    b. Cousin
    c. Godfather
    d. Uncle` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n13. What was the real name of Lord Voldemort?
    a. Tom Dumbledore
    b. Tom Riddle
    c. Alistar Tom
    d. Peter Sirius` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },{
    question: `\n14. In total how many horcruxes were there?
    a. 7
    b. 10
    c. 5
    d. 6` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n15. What is the name of professor who revealed the information to Tom Riddle about horcruxes?
    a. Professor Flitwick
    b. Professor Mcgonagall
    c. Professor Snape
    d. Professor Slughorn` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n16. Which one of the following is also called as killing curse?
    a. Cruciatus
    b. Avada kedavra
    c. Imperius
    d. Sectumsempra` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n17. Who destroyed the final horcrux?
    a. Ron Weasley
    b. Harry Potter
    c. Neville Longbottom
    d. Hermione Granger` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n18. What was dumbledore's full name?
    a. Albus Percival Wulfric Brian Dumbledore
    b. Albus Percival Wolfboy Brian Dumbledore
    c. Albus Percival Daniel Brian Dumbledore
    d. Albus Peter Wulfric Brian Dumbledore` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n19. What was the 6th horcrux?
    a. Snake
    b. Harry Potter himself
    c. Ring
    d. Diary` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n20. Who is the owner of a sorting hat who was one of the founders of Hogwarts?
    a. Rowena Ravenclaw
    b. Helga Hufflepuff
    c. Godric Gryffindor
    d. Salazar Slytherin` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  }];

  // ask user to enter his name
  const userName = readlineSync.question(chalk.black.bold.bgYellowBright.underline('Your Name:'));

  // welcome message and display instructions to user
  console.log(chalk.bgCyan.bold(`\nWelcome ` + userName + `!`+ ` to Harry Potter's Quiz.\n` + chalk.bgYellow.bold(`\nINSTRUCTIONS: -`) + `There are in total 4 levels with 20 questions in this quiz. Each correct answer gives you +5 points and each wrong question deducts half the total point awarded to each question. Without wasting any time, let's start the quiz. Best Of Luck 👍 \n`));

  // wait a moment till user read instructions
  readlineSync.keyInPause('Press any key to continue');

  // ask user whether he/she wants to start the quiz
  if (readlineSync.keyInYNStrict('\nDo you want to start the quiz?') === false) {
    // `N` key was pressed.
    console.log("Thank you for your valuable time. Have a nice day!");
    process.exit();
  }
  console.log(chalk.bgMagenta.bold("\nGreat! Let's begin with Level One :\n"));
  console.log("-----------------------------------------------------");
  // function
  function play (question, answer) {
    // input from user 
    const userAnswer = readlineSync.question(chalk.yellow(question));
    // if correct answer given score += 5
    if (userAnswer.toLowerCase() === answer) {
      console.log(chalk.black.bold.bgGreen("\nYeah, you're ✔ Correct"));
      score += 5;
      } else {
        console.log(chalk.black.bold.bgRedBright("\nOops! That's ✘ incorrect"));
        console.log(chalk.black.bold.bgGreen("\ncorrect answer is " + answer));
        score -= 2.5;
      }
      // display current score
    console.log(chalk.bgMagenta.bold("\nCurrent Score is: " + score));
    console.log("-----------------------------------------------------");
  }
    // for Loop to iterate over the levels
    for(var i=0; i<questions.length-15; i++)
    {
      var currentQuestion = questions[i];
      play (currentQuestion.question, currentQuestion.answer);
    }
  //if conditon for each level (to check if the user is eligiblefor the next //level or not.)
    if(score>=17.5){
        console.log(chalk.bgMagenta.bold("Congratulations! You've completed Level One!\n\nWelcome to the Level Two.\n"));
        console.log(chalk.bgMagenta.bold("Level Two :\n"));
        console.log("-----------------------------------------------------");

        for(var i=5; i<questions.length-10; i++)
        {
          var currentQuestion = questions[i];
          play (currentQuestion.question, currentQuestion.answer);
        }

        if(score>=35){
          console.log(chalk.bgMagenta.bold("Congratulations! You've completed Level Two!\n\nWelcome to the Level Three.\n"));
          console.log(chalk.bgMagenta.bold("Level Three :\n"));
          console.log("-----------------------------------------------------");
          
          for(var i=10; i<questions.length-5; i++)
          {
            var currentQuestion = questions[i];
            play (currentQuestion.question, currentQuestion.answer);
          }

        if(score>=52.5){
          console.log(chalk.bgMagenta.bold("Congratulations! You've completed Level Three!\n\nWelcome to the Level Four.\n"));
          console.log(chalk.bgMagenta.bold("Level Four :\n"));
          console.log("-----------------------------------------------------");
          
          for(var i=15; i<questions.length; i++)
          {
            var currentQuestion = questions[i];
            play (currentQuestion.question, currentQuestion.answer);
          }
        
        if (score>=80){
          console.log(chalk.bold.bgBlack.cyanBright("Congratulations! You've Scored " + score + ". "+ userName + " You're among one of the top scorers of our quiz! Send me a Screenshot of your score, will upadte the leaderboard!"));
        } else
        {
          console.log(chalk.bgMagenta("Well Done,you played well but couldn't make it in top players (Still,you scored more than half of the players,\nCheers!!\n\n)"));
        }
        } else
          {
          console.log("ooops!you scored less than 52.5 points, You're not eligible for Level 4. \nBetter Lcuk Next Time!");
          }
        } else
          {
          console.log("ooops!you scored less than 35 points, You're not eligible for Level 3. \nBetter Lcuk Next Time!");
        }
    } else
        {
          console.log("ooops!you scored less than 17.5 points, You're not eligible for Level 2. \nBetter Lcuk Next Time!");
        }

  // display total score
  console.log(chalk.bold.bgBlue("\nYAY! your Total Score is: " + score));
  console.log("-----------------------------------------------------");

  // LeaderBoard
  var highScores=[
  {
      name:"Neenad",
      score:100,
  },
  {
      name:"Saurabh",
      score:95,
  },
  {
      name:"Roshan",
      score:90,
  }
  ];

  console.log(chalk.bold.bgBlue("---------------------LeaderBoard---------------------\n"));

  // for Loop to iterate over LeaderBoard
  for(var i=0;i<highScores.length;i++)
  {
    var highscore=highScores[i];
    console.log(chalk.bold.bgBlue("Name: " , highscore.name));
    console.log(chalk.bold.bgBlue("Score: " , highscore.score));
    console.log("__________________________");
  }

  console.log(chalk.bold.bgBlack.cyanBright("“Help will always be given at Hogwarts to those who ask for it.”"));
  console.log(chalk.bold.bgBlack.cyanBright("\nTHANKYOU "+ userName.toUpperCase() +" FOR PARTICIPATING IN THE QUIZ ᛤ"));
