class BooleanQuestion{
    constructor(question) {
        this.question = question;
    }
    printAnswerCase() {
        console.log("1. true");
        console.log("2. false");
    }
}

class ChoiceQuestion{
    constructor(question) {
        this.question = question;
    }
    printAnswerCase() {
        this.question.choices.forEach((choice, index) => {
            console.log(`${index + 1} - ${choice}`);
        })
    }
}

class TextQuestion{
    constructor(question) {
        this.question = question;
    }
    printAnswerCase() {
        console.log("Ans: __________");
    }
}

class RangeQuestion{
    constructor(question) {
        this.question = question;
    }
    printAnswerCase() {
        console.log("Min: 1");
        console.log("Max: 5");
    }
}

function questionPaper(questions) {
    questions.forEach(element => {
        console.log(element.question.question);
        element.printAnswerCase();
    });
};

const questions = [
    new BooleanQuestion({
        type: "boolean",
        question: "JavaScript is a front-end language ?"
    }),
    new ChoiceQuestion({
        type: "choice",
        question: "Which is the runtime enviornment of JavaScript ?",
        choices: ["React js", "Node js", "Angular Js"]
    }),
    new TextQuestion({
        type: "text",
        question: "Who is the father of JavaScript ?",
    }),
    new RangeQuestion({
        type: "range",
        question: "On a scale of 1 to 5, how would you rate your experience with asynchronous JavaScript and Promises?",
    })
];

questionPaper(questions);

// In this case the print open for exentedable but closed for modification