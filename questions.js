const questions = [
    {
        text: "Your child shows interest in an expensive hobby. Do you...",
        choices: ["Support the new interest", "Suggest a more affordable activity"],
        consequences: [
            { parentStress: 15, childHappiness: 25, parentingConfidence: 5, childEducation: 10, finances: -30, familyHarmony: 10, workLifeBalance: -10, childSocialSkills: 15, parentMentalHealth: -5, childDevelopment: 20 },
            { parentStress: -5, childHappiness: -15, parentingConfidence: -5, childEducation: 0, finances: 10, familyHarmony: -5, workLifeBalance: 5, childSocialSkills: -10, parentMentalHealth: 5, childDevelopment: -5 }
        ],
        nextQuestion: [1, 2]
    },
{
    text: "Your child is having trouble with a subject in school. Do you...",
    choices: ["Hire a tutor", "Help them study yourself"],
    consequences: [
        { parentStress: 15, childHappiness: 5, parentingConfidence: 15, childEducation: 25, finances: -20, familyHarmony: 5, workLifeBalance: -5, childSocialSkills: 5, parentMentalHealth: 0, childDevelopment: 20 },
        { parentStress: -5, childHappiness: -5, parentingConfidence: 5, childEducation: 15, finances: 0, familyHarmony: 10, workLifeBalance: -15, childSocialSkills: 0, parentMentalHealth: -10, childDevelopment: 10 }
    ],
    nextQuestion: [29, 30]
},
{
    text: "Your child wants to join a new sports team. Do you...",
    choices: ["Encourage them to try", "Suggest they stick with their current activities"],
    consequences: [
        { parentStress: -15, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: -50, familyHarmony: 5, workLifeBalance: -10, childSocialSkills: 15, parentMentalHealth: -5, childDevelopment: 10 },
        { parentStress: 10, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 5, childSocialSkills: -5, parentMentalHealth: 5, childDevelopment: 0 }
    ],
    nextQuestion: [31, 32]
},
{
    text: "Your child is invited to a birthday party on the same day as a family event. Do you...",
    choices: ["Let them go to the party", "Prioritize the family event"],
    consequences: [
        { parentStress: 5, childHappiness: 25, parentingConfidence: 0, childEducation: 0, finances: -15, familyHarmony: -10, workLifeBalance: -5, childSocialSkills: 20, parentMentalHealth: -5, childDevelopment: 10 },
        { parentStress: -10, childHappiness: -20, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 15, workLifeBalance: 10, childSocialSkills: -10, parentMentalHealth: 5, childDevelopment: 5 }
    ],
    nextQuestion: [33, 34]
},
{
    text: "Your child is upset about a friend moving away. Do you...",
    choices: ["Help them cope with the loss", "Encourage them to make new friends"],
    consequences: [
        { parentStress: 5, childHappiness: 15, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 15, workLifeBalance: -5, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 15 },
        { parentStress: -5, childHappiness: 5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 20, parentMentalHealth: 0, childDevelopment: 10 }
    ],
    nextQuestion: [35, 36]
},
{
    text: "Your child is afraid of the dark. Do you...",
    choices: ["Get a night light", "Encourage them to face their fears"],
    consequences: [
        { parentStress: -5, childHappiness: 15, parentingConfidence: 5, childEducation: 0, finances: -10, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: 10, childHappiness: -5, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 5, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [37, 38]
},
{
    text: "Your child wants to stay up late for a special event. Do you...",
    choices: ["Allow it this time", "Stick to bedtime rules"],
    consequences: [
        { parentStress: -5, childHappiness: 20, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 10, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 5 },
        { parentStress: 10, childHappiness: -10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 0 }
    ],
    nextQuestion: [39, 40]
},
{
    text: "Your child is being teased at school. Do you...",
    choices: ["Talk to the teacher", "Encourage them to stand up for themselves"],
    consequences: [
        { parentStress: -15, childHappiness: -10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: -10, childSocialSkills: 5, parentMentalHealth: -10, childDevelopment: 5 },
        { parentStress: 5, childHappiness: 5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [41, 42]
},
{
    text: "Your child wants to quit an activity they've been doing for a while. Do you...",
    choices: ["Support their decision", "Encourage them to finish the season"],
    consequences: [
        { parentStress: -5, childHappiness: 15, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: 10, childHappiness: -10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 5, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [43, 44]
},
{
    text: "Your child is struggling with a new sibling. Do you...",
    choices: ["Spend one-on-one time with them", "Encourage them to bond with the sibling"],
    consequences: [
        { parentStress: -20, childHappiness: 10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: -10, childSocialSkills: 5, parentMentalHealth: -5, childDevelopment: 10 },
        { parentStress: 15, childHappiness: 5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [45, 46]
},
{
    text: "Your child wants to go to a friend's house without you. Do you...",
    choices: ["Let them go", "Insist on accompanying them"],
    consequences: [
        { parentStress: 10, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 15, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -15, childHappiness: -5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [47, 48]
},
{
    text: "Your child is not eating well. Do you...",
    choices: ["Consult a nutritionist", "Try to improve meals at home"],
    consequences: [
        { parentStress: -20, childHappiness: -10, parentingConfidence: 10, childEducation: 0, finances: -50, familyHarmony: 0, workLifeBalance: -10, childSocialSkills: 0, parentMentalHealth: -10, childDevelopment: 5 },
        { parentStress: 15, childHappiness: 5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [49, 50]
},
{
    text: "Your child is interested in a new hobby. Do you...",
    choices: ["Encourage them to pursue it", "Suggest they focus on schoolwork"],
    consequences: [
        { parentStress: 10, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: -30, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 15 },
        { parentStress: -15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [51, 52]
},
{
    text: "Your child is having nightmares. Do you...",
    choices: ["Talk to them about it", "Ignore it and hope it passes"],
    consequences: [
        { parentStress: -15, childHappiness: 10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: 20, childHappiness: -5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [53, 54]
},
{
    text: "Your child wants to go to a concert with friends. Do you...",
    choices: ["Let them go", "Say they are too young"],
    consequences: [
        { parentStress: 10, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: -50, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 15, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [55, 56]
},
{
    text: "Your child is upset about a bad grade. Do you...",
    choices: ["Help them study harder", "Encourage them to try again next time"],
    consequences: [
        { parentStress: 15, childHappiness: 5, parentingConfidence: 10, childEducation: 20, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -10, childHappiness: 10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [57, 58]
},
{
    text: "Your child wants to change schools. Do you...",
    choices: ["Support their decision", "Encourage them to stay"],
    consequences: [
        { parentStress: -20, childHappiness: 15, parentingConfidence: 10, childEducation: 0, finances: -100, familyHarmony: 5, workLifeBalance: -10, childSocialSkills: 10, parentMentalHealth: -5, childDevelopment: 15 },
        { parentStress: 15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [59, 60]
},
{
    text: "Your child is interested in a new video game. Do you...",
    choices: ["Allow them to play", "Set limits on screen time"],
    consequences: [
        { parentStress: 15, childHappiness: 20, parentingConfidence: -5, childEducation: -10, finances: -10, familyHarmony: -5, workLifeBalance: 10, childSocialSkills: -10, parentMentalHealth: -5, childDevelopment: -10 },
        { parentStress: -20, childHappiness: -15, parentingConfidence: 10, childEducation: 10, finances: 0, familyHarmony: 5, workLifeBalance: -5, childSocialSkills: 5, parentMentalHealth: 5, childDevelopment: 10 }
    ],
    nextQuestion: [61, 62]
},
{
    text: "Your child wants to go on a school trip. Do you...",
    choices: ["Allow them to go", "Express concerns about safety"],
    consequences: [
        { parentStress: -15, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: -100, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 15, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: 20, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [63, 64]
},
{
    text: "Your child is feeling overwhelmed with schoolwork. Do you...",
    choices: ["Help them prioritize tasks", "Encourage them to manage on their own"],
    consequences: [
        { parentStress: 20, childHappiness: 5, parentingConfidence: 10, childEducation: 20, finances: 0, familyHarmony: 5, workLifeBalance: -10, childSocialSkills: 0, parentMentalHealth: -10, childDevelopment: 15 },
        { parentStress: -15, childHappiness: 10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [65, 66]
},
{
    text: "Your child wants to learn a musical instrument. Do you...",
    choices: ["Encourage them to take lessons", "Suggest they focus on academics"],
    consequences: [
        { parentStress: -10, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: -50, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 15 },
        { parentStress: 15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [67, 68]
},
{
    text: "Your child is feeling anxious about a school presentation. Do you...",
    choices: ["Help them prepare", "Encourage them to practice alone"],
    consequences: [
        { parentStress: 15, childHappiness: 10, parentingConfidence: 10, childEducation: 20, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -20, childHappiness: -5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [69, 70]
},
{
    text: "Your child wants to go to a friend's house for a sleepover. Do you...",
    choices: ["Let them go", "Say they are too young"],
    consequences: [
        { parentStress: 10, childHappiness: 20, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 15, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [71, 72]
},
{
    text: "Your child is upset about a friend not inviting them to a party. Do you...",
    choices: ["Talk to them about it", "Encourage them to make new friends"],
    consequences: [
        { parentStress: 15, childHappiness: 5, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -20, childHappiness: -5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [73, 74]
},
{
    text: "Your child wants to wear something you think is inappropriate. Do you...",
    choices: ["Let them express themselves", "Set strict clothing rules"],
    consequences: [
        { parentStress: 10, childHappiness: 15, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: 5, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 5, childDevelopment: 10 },
        { parentStress: -15, childHappiness: -10, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: -5, childDevelopment: 5 }
    ],
    nextQuestion: [75, 76]
},
{
    text: "Your child is feeling left out at school. Do you...",
    choices: ["Talk to the teacher", "Encourage them to join new activities"],
    consequences: [
        { parentStress: -20, childHappiness: -10, parentingConfidence: 10, childEducation: 0, finances: 0, familyHarmony: -5, workLifeBalance: -10, childSocialSkills: 5, parentMentalHealth: -10, childDevelopment: 5 },
        { parentStress: 15, childHappiness: 5, parentingConfidence: 5, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 10, parentMentalHealth: 0, childDevelopment: 5 }
    ],
    nextQuestion: [77, 78]
},
{
    text: "Congratulations! You've successfully balanced your child's development and your own well-being. Your parenting journey has been a success!",
    choices: ["Start a New Journey", "End Game"],
    consequences: [
        { parentStress: 0, childHappiness: 0, parentingConfidence: 0, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 0 },
        { parentStress: 0, childHappiness: 0, parentingConfidence: 0, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 0 }
    ],
    nextQuestion: [0, -1]
},
{
    text: "The challenges of parenting have become overwhelming. Remember that every parent faces difficulties, and it's okay to start fresh.",
    choices: ["Try Again", "Take a Break"],
    consequences: [
        { parentStress: 0, childHappiness: 0, parentingConfidence: 0, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 0 },
        { parentStress: 0, childHappiness: 0, parentingConfidence: 0, childEducation: 0, finances: 0, familyHarmony: 0, workLifeBalance: 0, childSocialSkills: 0, parentMentalHealth: 0, childDevelopment: 0 }
    ],
    nextQuestion: [0, -1]
}];