// const screeningQuestions = [
//     {
//         question: "I have been able to laugh and see the funny side of things",
//         answers: {
//             one: {text: "As much as I always could", value: 0},
//             two: {text: "Not quite so much now", value: 1},
//             three: {text: "Definitely not so much now", value: 2},
//             four: {text: "Not quite so much now", value: 3},
//         }
//     },
//     {
//         question: "I have looked forward with enjoyment to things",
//         answers: {
//             one: {text: "As much as I ever did", value: 0},
//             two: {text: "Rather less than I used to", value: 1},
//             three: {text: "Definitely less than I used to", value: 2},
//             four: {text: "Hardly at all", value: 3},
//         }
//     },
//     {
//         question: "I have blamed myself unnecessarily when things went wrong",
//         answers: {
//             one: {text: "Yes, most of the time", value: 3},
//             two: {text: "Yes, some of the time", value: 2},
//             three: {text: "Not very often", value: 1},
//             four: {text: "No, never", value: 0},
//         }
//     },
//     {
//         question: "I have been anxious or worried for no good reason",
//         answers: {
//             one: {text: "No, not at all", value: 0},
//             two: {text: "Hardly ever", value: 1},
//             three: {text: "Yes, sometimes", value: 2},
//             four: {text: "Yes, very often", value: 3},
//         }
//     },
//     {
//         question: "I have felt scared or panicky for no very good reason",
//         answers: {
//             one: {text: "Yes, quite a lot", value: 3},
//             two: {text: "Yes, sometimes", value: 2},
//             three: {text: "No, not much", value: 1},
//             four: {text: "No, not at all", value: 0},
//         }
//     },
//     {
//         question: "Things have been getting on top of me",
//         answers: {
//             one: {text: "Yes, most of the time I haven't been able to cope at all", value: 3},
//             two: {text: "Yes, sometimes I haven't been coping as well as usual", value: 2},
//             three: {text: "No, most of the time I have coped quite well", value: 1},
//             four: {text: "No, I have been coping as well as ever", value: 0},
//         }
//     },
//     {
//         question: "I have been so unhappy that I have had difficulty sleeping",
//         answers: {
//             one: {text: "Yes, most of the time", value: 3},
//             two: {text: "Yes, sometimes", value: 2},
//             three: {text: "Not very often", value: 1},
//             four: {text: "No, not at all", value: 0},
//         }
//     },
//     {
//         question: "I have felt sad or miserable",
//         answers: {
//             one: {text: "Yes, most of the time", value: 3},
//             two: {text: "Yes, quite often", value: 2},
//             three: {text: "Not very often", value: 1},
//             four: {text: "No, not at all", value: 0},
//         }
//     },
//     {
//         question: "I have been so unhappy that I have been crying",
//         answers: {
//             one: {text: "Yes, most of the time", value: 3},
//             two: {text: "Yes, quite often", value: 2},
//             three: {text: "Only occasionally", value: 1},
//             four: {text: "No, never", value: 0},
//         }
//     },
//     {
//         question: "The thought of harming myself has occurred to me",
//         answers: {
//             one: {text: "Yes, quite often", value: 3},
//             two: {text: "Sometimes", value: 2},
//             three: {text: "Hardly ever", value: 1},
//             four: {text: "Never", value: 0},
//         }
//     }

// ]

// export default function generateScreening(screeningQuestions, screeningContainer, resultsContainer, submitButton){
//     let output = [];
//     let answers;
//     for(let i=0; i<screeningQuestions.length; i++){
//         answers= [];
//         for(let answer in screeningQuestions[i].answers){
//             answers.push(
//                 '<label>'
//                     + '<input type="radio" name="question'+i+'" value="'+answer+'">'
//                     + answer + ': '
//                     + screeningQuestions[i].answer
//                 + '</label>'
//             );
//         }
//         output.push(
//             '<div class="question">' + screeningQuestions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         )
//     }
//     console.log(output.join(''))
// }
