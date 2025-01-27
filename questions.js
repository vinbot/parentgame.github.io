const questions = [
    // Original questions
    {
        text: "Your advisor suggests a new research direction. Do you...",
        choices: ["Embrace the change", "Stick to current path"],
        consequences: [
            { stress: 20, productivity: -10, advisorApproval: 30, knowledge: 10, funding: 0, publications: 0, workLifeBalance: -10, networkingScore: 0, mentalHealth: -5, researchProgress: 5 },
            { stress: 10, productivity: 10, advisorApproval: -20, knowledge: 5, funding: 0, publications: 5, workLifeBalance: 0, networkingScore: 0, mentalHealth: 0, researchProgress: 10 }
        ],
        nextQuestion: [1, 2]
    },
    {
        text: "A conference deadline is approaching. Do you...",
        choices: ["Pull all-nighters", "Submit to a later conference"],
        consequences: [
            { stress: 40, productivity: 20, advisorApproval: 10, knowledge: 5, funding: 0, publications: 15, workLifeBalance: -30, networkingScore: 10, mentalHealth: -20, researchProgress: 15 },
            { stress: -10, productivity: -5, advisorApproval: -15, knowledge: 0, funding: 0, publications: -10, workLifeBalance: 10, networkingScore: -5, mentalHealth: 10, researchProgress: -5 }
        ],
        nextQuestion: [3, 4]
    },
    {
        text: "Department seminar conflicts with your experiment time. Do you...",
        choices: ["Attend seminar", "Continue experiment"],
        consequences: [
            { stress: 5, productivity: -10, advisorApproval: 15, knowledge: 20, funding: 0, publications: 0, workLifeBalance: 0, networkingScore: 15, mentalHealth: 5, researchProgress: -5 },
            { stress: 10, productivity: 20, advisorApproval: -5, knowledge: -5, funding: 0, publications: 5, workLifeBalance: -5, networkingScore: -10, mentalHealth: -5, researchProgress: 15 }
        ],
        nextQuestion: [5, 6]
    },
    {
        text: "Your laptop crashes before backing up work. Do you...",
        choices: ["Attempt data recovery", "Redo the work"],
        consequences: [
            { stress: 30, productivity: -20, advisorApproval: 0, knowledge: 5, funding: -5, publications: 0, workLifeBalance: -15, networkingScore: 0, mentalHealth: -15, researchProgress: -10 },
            { stress: 25, productivity: -15, advisorApproval: 5, knowledge: 10, funding: 0, publications: -5, workLifeBalance: -20, networkingScore: 0, mentalHealth: -10, researchProgress: -15 }
        ],
        nextQuestion: [7, 8]
    },
    {
        text: "A fellow grad student needs help with their project. Do you...",
        choices: ["Help them out", "Focus on your work"],
        consequences: [
            { stress: 10, productivity: -10, advisorApproval: 5, knowledge: 15, funding: 0, publications: 0, workLifeBalance: -5, networkingScore: 20, mentalHealth: 5, researchProgress: -5 },
            { stress: -5, productivity: 15, advisorApproval: 0, knowledge: 0, funding: 0, publications: 5, workLifeBalance: 5, networkingScore: -15, mentalHealth: -5, researchProgress: 10 }
        ],
        nextQuestion: [9, 10]
    },
    {
        text: "You receive harsh peer review comments. Do you...",
        choices: ["Take a break then revise", "Immediately address all points"],
        consequences: [
            { stress: -10, productivity: 5, advisorApproval: 0, knowledge: 10, funding: 0, publications: 5, workLifeBalance: 10, networkingScore: 0, mentalHealth: 15, researchProgress: 5 },
            { stress: 25, productivity: 15, advisorApproval: 10, knowledge: 5, funding: 0, publications: 10, workLifeBalance: -15, networkingScore: 0, mentalHealth: -10, researchProgress: 10 }
        ],
        nextQuestion: [11, 12]
    },
    {
        text: "A funding opportunity appears but deadline is tight. Do you...",
        choices: ["Apply with current research", "Skip this opportunity"],
        consequences: [
            { stress: 20, productivity: -5, advisorApproval: 15, knowledge: 5, funding: 30, publications: 0, workLifeBalance: -15, networkingScore: 10, mentalHealth: -10, researchProgress: 5 },
            { stress: -5, productivity: 10, advisorApproval: -10, knowledge: 0, funding: -20, publications: 0, workLifeBalance: 10, networkingScore: -5, mentalHealth: 5, researchProgress: 5 }
        ],
        nextQuestion: [13, 14]
    },
    {
        text: "Your research equipment malfunctions. Do you...",
        choices: ["Try to fix it yourself", "Wait for technical support"],
        consequences: [
            { stress: 25, productivity: -15, advisorApproval: 5, knowledge: 15, funding: -10, publications: 0, workLifeBalance: -10, networkingScore: 0, mentalHealth: -10, researchProgress: -5 },
            { stress: 10, productivity: -20, advisorApproval: 0, knowledge: 5, funding: -5, publications: -5, workLifeBalance: 5, networkingScore: 0, mentalHealth: 5, researchProgress: -15 }
        ],
        nextQuestion: [15, 16]
    },
    {
        text: "A prestigious summer school opportunity arises. Do you...",
        choices: ["Apply and attend", "Focus on current research"],
        consequences: [
            { stress: 15, productivity: -10, advisorApproval: 10, knowledge: 25, funding: -5, publications: 0, workLifeBalance: -10, networkingScore: 25, mentalHealth: 5, researchProgress: -5 },
            { stress: -5, productivity: 15, advisorApproval: -5, knowledge: 5, funding: 0, publications: 5, workLifeBalance: 5, networkingScore: -15, mentalHealth: 0, researchProgress: 10 }
        ],
        nextQuestion: [17, 18]
    },
    {
        text: "Your paper gets rejected. Do you...",
        choices: ["Submit to another journal", "Major revision first"],
        consequences: [
            { stress: 15, productivity: 5, advisorApproval: -5, knowledge: 0, funding: 0, publications: -5, workLifeBalance: -5, networkingScore: 0, mentalHealth: -10, researchProgress: 0 },
            { stress: 20, productivity: 10, advisorApproval: 10, knowledge: 15, funding: 0, publications: 10, workLifeBalance: -15, networkingScore: 0, mentalHealth: -5, researchProgress: 15 }
        ],
        nextQuestion: [19, 20]
    },
    {
        text: "A collaboration opportunity presents itself. Do you...",
        choices: ["Join the collaboration", "Work independently"],
        consequences: [
            { stress: 10, productivity: -5, advisorApproval: 15, knowledge: 20, funding: 10, publications: 15, workLifeBalance: -10, networkingScore: 25, mentalHealth: 5, researchProgress: 10 },
            { stress: -5, productivity: 10, advisorApproval: -5, knowledge: 5, funding: 0, publications: 5, workLifeBalance: 5, networkingScore: -15, mentalHealth: 0, researchProgress: 5 }
        ],
        nextQuestion: [21, 22]
    },
    {
        text: "Department needs teaching assistants. Do you...",
        choices: ["Take the position", "Decline the offer"],
        consequences: [
            { stress: 20, productivity: -15, advisorApproval: 5, knowledge: 10, funding: 15, publications: -5, workLifeBalance: -20, networkingScore: 10, mentalHealth: -10, researchProgress: -10 },
            { stress: -5, productivity: 10, advisorApproval: -5, knowledge: 0, funding: -15, publications: 5, workLifeBalance: 10, networkingScore: -5, mentalHealth: 5, researchProgress: 10 }
        ],
        nextQuestion: [23, 24]
    },
    {
        text: "Your research hits a major roadblock. Do you...",
        choices: ["Pivot approach", "Push through"],
        consequences: [
            { stress: 15, productivity: -10, advisorApproval: 5, knowledge: 15, funding: 0, publications: -5, workLifeBalance: -5, networkingScore: 0, mentalHealth: -5, researchProgress: -10 },
            { stress: 25, productivity: 5, advisorApproval: 10, knowledge: 10, funding: 0, publications: 5, workLifeBalance: -15, networkingScore: 0, mentalHealth: -15, researchProgress: 5 }
        ],
        nextQuestion: [25, 26]
    },
    {
        text: "A weekend workshop conflicts with family event. Do you...",
        choices: ["Attend workshop", "Choose family event"],
        consequences: [
            { stress: 15, productivity: 10, advisorApproval: 10, knowledge: 15, funding: 0, publications: 5, workLifeBalance: -20, networkingScore: 15, mentalHealth: -10, researchProgress: 10 },
            { stress: -10, productivity: -5, advisorApproval: -5, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 20, networkingScore: -5, mentalHealth: 15, researchProgress: -5 }
        ],
        nextQuestion: [27, 28]
    },
    {
        text: "You find an error in your published work. Do you...",
        choices: ["Publish correction immediately", "Discuss with advisor first"],
        consequences: [
            { stress: 30, productivity: -10, advisorApproval: -10, knowledge: 5, funding: 0, publications: -5, workLifeBalance: -10, networkingScore: -5, mentalHealth: -15, researchProgress: -5 },
            { stress: 20, productivity: -5, advisorApproval: 10, knowledge: 10, funding: 0, publications: -5, workLifeBalance: -5, networkingScore: 0, mentalHealth: -5, researchProgress: 0 }
        ],
        nextQuestion: [29, 30]
    },
    {
        text: "A senior researcher offers mentorship. Do you...",
        choices: ["Accept mentorship", "Maintain independence"],
        consequences: [
            { stress: 5, productivity: 5, advisorApproval: 0, knowledge: 20, funding: 10, publications: 10, workLifeBalance: -10, networkingScore: 20, mentalHealth: 5, researchProgress: 15 },
            { stress: 0, productivity: 10, advisorApproval: 5, knowledge: 5, funding: 0, publications: 5, workLifeBalance: 5, networkingScore: -10, mentalHealth: 0, researchProgress: 5 }
        ],
        nextQuestion: [31, 32]
    },
    {
        text: "Department requests committee participation. Do you...",
        choices: ["Join committee", "Politely decline"],
        consequences: [
            { stress: 15, productivity: -15, advisorApproval: 10, knowledge: 5, funding: 0, publications: -5, workLifeBalance: -15, networkingScore: 15, mentalHealth: -5, researchProgress: -10 },
            { stress: -5, productivity: 10, advisorApproval: -5, knowledge: 0, funding: 0, publications: 5, workLifeBalance: 10, networkingScore: -10, mentalHealth: 5, researchProgress: 10 }
        ],
        nextQuestion: [33, 34]
    },
    {
        text: "You're offered industry internship. Do you...",
        choices: ["Take the internship", "Focus on academia"],
        consequences: [
            { stress: 20, productivity: -10, advisorApproval: -10, knowledge: 15, funding: 20, publications: -10, workLifeBalance: -15, networkingScore: 20, mentalHealth: 0, researchProgress: -15 },
            { stress: 0, productivity: 15, advisorApproval: 15, knowledge: 10, funding: -5, publications: 10, workLifeBalance: 5, networkingScore: -5, mentalHealth: 5, researchProgress: 15 }
        ],
        nextQuestion: [35, 36]
    },
    {
        text: "Your research could have commercial potential. Do you...",
        choices: ["Pursue patent", "Focus on publication"],
        consequences: [
            { stress: 25, productivity: -15, advisorApproval: 10, knowledge: 10, funding: 25, publications: -10, workLifeBalance: -20, networkingScore: 15, mentalHealth: -10, researchProgress: -5 },
            { stress: 10, productivity: 10, advisorApproval: 5, knowledge: 5, funding: -5, publications: 15, workLifeBalance: 5, networkingScore: 5, mentalHealth: 5, researchProgress: 10 }
        ],
        nextQuestion: [37, 38]
    },
    {
        text: "A competitive fellowship opens up. Do you...",
        choices: ["Apply for it", "Skip this cycle"],
        consequences: [
            { stress: 20, productivity: -10, advisorApproval: 15, knowledge: 5, funding: 30, publications: 0, workLifeBalance: -15, networkingScore: 10, mentalHealth: -10, researchProgress: -5 },
            { stress: -5, productivity: 10, advisorApproval: -10, knowledge: 0, funding: -20, publications: 5, workLifeBalance: 10, networkingScore: -5, mentalHealth: 5, researchProgress: 10 }
        ],
        nextQuestion: [39, 40]
    },
    {
        text: "You're invited to give a talk abroad. Do you...",
        choices: ["Accept invitation", "Decline politely"],
        consequences: [
            { stress: 25, productivity: -15, advisorApproval: 20, knowledge: 15, funding: -10, publications: 5, workLifeBalance: -20, networkingScore: 25, mentalHealth: -5, researchProgress: -10 },
            { stress: -5, productivity: 10, advisorApproval: -10, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 10, networkingScore: -15, mentalHealth: 5, researchProgress: 10 }
        ],
        nextQuestion: [41, 42]
    },
    {
        text: "A journal requests you to review a paper. Do you...",
        choices: ["Accept review", "Decline review"],
        consequences: [
            { stress: 15, productivity: -10, advisorApproval: 10, knowledge: 15, funding: 0, publications: 0, workLifeBalance: -10, networkingScore: 10, mentalHealth: -5, researchProgress: -5 },
            { stress: -5, productivity: 10, advisorApproval: -5, knowledge: -5, funding: 0, publications: 0, workLifeBalance: 5, networkingScore: -5, mentalHealth: 5, researchProgress: 5 }
        ],
        nextQuestion: [43, 44]
    },
    {
        text: "Your mental health is declining. Do you...",
        choices: ["Seek professional help", "Push through it"],
        consequences: [
            { stress: -20, productivity: -10, advisorApproval: 5, knowledge: 5, funding: 0, publications: -5, workLifeBalance: 15, networkingScore: 0, mentalHealth: 25, researchProgress: -5 },
            { stress: 30, productivity: 5, advisorApproval: 0, knowledge: 0, funding: 0, publications: 5, workLifeBalance: -20, networkingScore: -5, mentalHealth: -30, researchProgress: 5 }
        ],
        nextQuestion: [45, 46]
    },
    {
        text: "A potential industry job opens up. Do you...",
        choices: ["Explore opportunity", "Stay focused on PhD"],
        consequences: [
            { stress: 15, productivity: -15, advisorApproval: -10, knowledge: 10, funding: 0, publications: -5, workLifeBalance: -10, networkingScore: 15, mentalHealth: -5, researchProgress: -10 },
            { stress: 5, productivity: 10, advisorApproval: 15, knowledge: 5, funding: 0, publications: 10, workLifeBalance: 5, networkingScore: -5, mentalHealth: 5, researchProgress: 15 }
        ],
        nextQuestion: [47, 48]
    },
    {
        text: "Your research could help a social cause. Do you...",
        choices: ["Pivot towards impact", "Maintain current focus"],
        consequences: [
            { stress: 20, productivity: -5, advisorApproval: 5, knowledge: 15, funding: 10, publications: 5, workLifeBalance: -15, networkingScore: 20, mentalHealth: 10, researchProgress: -5 },
            { stress: 5, productivity: 10, advisorApproval: 0, knowledge: 5, funding: 0, publications: 10, workLifeBalance: 5, networkingScore: -10, mentalHealth: -5, researchProgress: 10 }
        ],
        nextQuestion: [49, 50]
    },
    {
        text: "A prestigious lab invites collaboration. Do you...",
        choices: ["Accept collaboration", "Maintain independence"],
        consequences: [
            { stress: 25, productivity: 10, advisorApproval: 20, knowledge: 20, funding: 15, publications: 15, workLifeBalance: -20, networkingScore: 25, mentalHealth: -10, researchProgress: 15 },
            { stress: 5, productivity: 5, advisorApproval: -10, knowledge: 5, funding: -5, publications: 5, workLifeBalance: 10, networkingScore: -15, mentalHealth: 5, researchProgress: 5 }
        ],
        nextQuestion: [51, 52]
    },
    {
        text: "Congratulations! You've successfully completed your PhD! Want to try another path?",
        choices: ["Start New Game", "Exit"],
        consequences: [
            { stress: 0, productivity: 0, advisorApproval: 0, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 0, networkingScore: 0, mentalHealth: 0, researchProgress: 0 },
            { stress: 0, productivity: 0, advisorApproval: 0, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 0, networkingScore: 0, mentalHealth: 0, researchProgress: 0 }
        ],
        nextQuestion: [0, -1]
    },
    {
        text: "Game Over! Your grad school journey has ended. Play again?",
        choices: ["Yes", "No"],
        consequences: [
            { stress: 0, productivity: 0, advisorApproval: 0, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 0, networkingScore: 0, mentalHealth: 0, researchProgress: 0 },
            { stress: 0, productivity: 0, advisorApproval: 0, knowledge: 0, funding: 0, publications: 0, workLifeBalance: 0, networkingScore: 0, mentalHealth: 0, researchProgress: 0 }
        ],
        nextQuestion: [0, -1]
    }
];