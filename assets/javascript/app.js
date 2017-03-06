$(document).ready(function() {
	//questions
	var questions = [
	{
			question:'What is the capital of connecticut? ',
			answers:['Hartford ', 'Tallahasee ', 'Atlanta '],
			correctAnswer: 0	
	},{
			question:'What is the capital of Hawaii? ',
			answers:['Honolulu ', 'Cheyenne ', 'Lansing '],
			correctAnswer: 0

	},{
			question:'What is the capital of California? ',
			answers:['Sacramento ', 'Santa Fe ', 'Trenton '],
			correctAnswer: 0

	},{
			question:'What is the capital of Georgia? ',
			answers:['Sacramento ', 'Pierre ', 'Atlanta ',],
			correctAnswer: 2 
	},{
			question:'What is the capital of New York? ',
			answers:['Albany ', 'Providence ', 'Richmond '],
			correctAnswer: 0 
	}];

	console.log(questions[4].question);

	
	var score = 0;

	$(document).on('click', "#start", function(){
		console.log("start clicked");
        listQuestion();
        stopwatch.start();
        $(this).hide();
	});

    var intervalId;

    var stopwatch = {

        time: 30,

        reset: function() {

            stopwatch.time = 0;

            $("#timer").html("00:00");

        },
        start: function() {
            intervalId = setInterval(stopwatch.count, 1000);
            $("#timer").html("<h2> Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
        },

        stop: function() {

            clearInterval(intervalId);
        },

        count: function() {

            stopwatch.time--;
            $("#counter-number").html(stopwatch.time);
            if (stopwatch.time === 0) {
                showResults();
            }

        }
    }



    var listQuestion = function() {
		$("#div1").empty();
        for (var i = 0; i < questions.length; i++) {

            // Create element for new question
            var $newQuestion = $("<div>");
            // Create element for the question
            var $question = $("<h4>").text(questions[i].question);
            // Create element for fieldset
            var $fieldset = $("<fieldset>").attr("id", "question" + i);

            // Loop through answers
            for (var j = 0; j < questions[i].answers.length; j++) {
                // Create element for answers
                var $newAnswerLabel = $('<label>').attr("for", "question" + i)
                    .text(questions[i].answers[j]);

                var $newAnswerRadio = $('<input>').attr("type", "radio")
                    .attr("name", "question" + i)
                    .attr("value", j);
                // append them to fieldset
                $fieldset.append($newAnswerRadio, $newAnswerLabel);
            }

            // Append question and fieldset to #div1
            $newQuestion.append($question, $fieldset).appendTo('#div1');

        }

        $("<button>").text("Submit Answers")
            .appendTo("#div2")
            .on("click", showResults);
    };

     

    var showResults = function() {
        //stop timer
        stopwatch.stop();

        var triviaQuestions = $("#div1").children();

        $.each(triviaQuestions, function(index, question) {
            var theQuestion = $(question).find(":checked").attr('name');
            var answer = $(question).find(":checked").attr('value');

            if (questions[index].correctAnswer == answer) {
                console.log("You got " + theQuestion + " right!")
            } //need a variable to collect data & reference it in a new div


        });

        //compare answer with correctAnswer & assign a point if it is

        //save answers

        //remove questions - empty page

        //display results

        //show start button

    }

});



