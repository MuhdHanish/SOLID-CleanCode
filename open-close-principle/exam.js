function questionPaper(questions) {
    questions.forEach(element => {
        console.log(element.question);
        switch (element.type) {
            case "boolean":
                console.log("1. true");
                console.log("2. false");
                break;
            case "choice":
                element.choices.forEach((choice,index) => {
                    console.log(`${index + 1} - ${choice}`);
                })
                break;
            case "text":
                console.log("Answer: _____________");
                break;
            default:
                break;
        };
        console.log("");
    });
};

const questions = [
    {
        type: "boolean",
        question: "JavaScript is a front-end language ?"
    },
    {
        type: "choice",
        question: "Which is the runtime enviornment of JavaScript ?",
        choices: ["React js", "Node js", "Angular Js"]
    },
    {
        type: "text",
        question: "Who is the father of JavaScript ?",
    }
];

questionPaper(questions);

// Here if i need to add a new question type that leed to change the implemention of the actual code