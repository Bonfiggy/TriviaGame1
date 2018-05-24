var panel = $('#trivia-area');

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

var questions = [{
  question: "1 . What does http stand for?",
  answers: ["Hypertext Terminal Protocol", "Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "HypeText Trans Protocol"],
  correctAnswer: "Hypertext Transfer Protocol"
}, {
  question: "2 . What is the common shortcut for the ''paste'' function?",
  answers: ["ctrl + p", "ctrl + s", "ctrl + v", "ctrl + c"],
  correctAnswer: "ctrl v"
}, {
  question: "3 . Which of the following is a video file format?",
  answers: [".png", ".avi", ".bmp", ".mp3"],
  correctAnswer: ".avi"
}, {
  question: "4 . Which web browser is developed by Apple?",
  answers: ["Chrome", "Opera", "Safari", "Firefox"],
  correctAnswer: "Safari"
}, {
  question: "5 . Which of the following is the smallest unit of memory size?",
  answers: ["Terabyte", "Gigabyte", "Kilobyte", "Megabyte"],
  correctAnswer: "Kilobyte"
}, {
  question:  "6 . Which of the following is not an Operating System?",
  answers: ["Windows", "Linux", "OS X", "Java"],
  correctAnswer: "Java"
}, {
  question: "7 . What does the computing term ''RAM'', stand for?",
  answers: ["Random Access Memory", "Reliable Alternate Memory", "Reverse Architecture Memory", "Reliable Access Memory"],
  correctAnswer: "Random Access Memory"
}, {
  question: "8 . How many computer languages are in use??",
  answers: ["20", "2000", "50", "4500"],
  correctAnswer: "2000"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter').html(game.counter);

    if (game.counter === 0){
      console.log('TIME IS UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subContainer').prepend('<h2>Time Remaining: <span id="counter">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subContainer h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};