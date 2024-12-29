import { Question } from '../types';

export const questions: Question[] = [
  {
    id: "1",
    type: "QUANTITATIVE",
    question: "A train traveling at 60 km/h takes 4 hours to complete a journey. How long will it take the same train to travel the same distance at 80 km/h?",
    options: ["3 hours", "3.5 hours", "4.5 hours", "5 hours"],
    correctAnswer: "3 hours",
    timeLimit: 120,
    difficulty: "hard",
    explanation: "Distance = Speed * Time. Distance = 60 km/h * 4 hours = 240 km. Time at 80 km/h = Distance / Speed = 240 km / 80 km/h = 3 hours"
  },
  {
    id: "2",
    type: "QUANTITATIVE",
    question: "If a shopkeeper buys an item for Rs. 50 and sells it for Rs. 60, what is his percentage profit?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: "20%",
    timeLimit: 90,
    difficulty: "medium",
    explanation: "Profit = Selling Price - Cost Price = Rs. 60 - Rs. 50 = Rs. 10. Profit Percentage = (Profit / Cost Price) * 100 = (10 / 50) * 100 = 20%"
  },
  {
    id: "3",
    type: "QUANTITATIVE",
    question: "Find the value of x in the equation: 3x² - 7x + 2 = 0",
    options: ["2", "1/3", "2, 1/3", "-2, -1/3"],
    correctAnswer: "2, 1/3",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Factor the quadratic equation: (3x - 1)(x - 2) = 0. Therefore, x = 1/3 or x = 2"
  },
  {
    id: "4",
    type: "QUANTITATIVE",
    question: "A bag contains 5 red balls and 3 green balls. What is the probability of drawing a green ball at random?",
    options: ["3/8", "5/8", "1/3", "3/5"],
    correctAnswer: "3/8",
    timeLimit: 90,
    difficulty: "medium",
    explanation: "Total balls = 5 (red) + 3 (green) = 8. Probability of drawing a green ball = Number of green balls / Total balls = 3/8"
  },
  {
    id: "5",
    type: "QUANTITATIVE",
    question: "The average age of 5 children is 10 years. If the age of a new child is added, the average age becomes 9 years. What is the age of the new child?",
    options: ["5 years", "6 years", "7 years", "8 years"],
    correctAnswer: "5 years",
    timeLimit: 120,
    difficulty: "medium",
    explanation: "Total age of 5 children = 5 * 10 = 50 years. Total age of 6 children = 6 * 9 = 54 years. Age of the new child = 54 - 50 = 4 years"
  },
  {
    id: "6",
    type: "QUANTITATIVE",
    question: "A clock loses 5 minutes every hour. What will be the time shown on the clock when the actual time is 6:00 PM, if the clock showed the correct time at 8:00 AM?",
    options: ["4:40 PM", "4:50 PM", "5:00 PM", "5:10 PM"],
    correctAnswer: "4:50 PM",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Time elapsed since 8:00 AM = 10 hours. Time lost by the clock = 10 hours * 5 minutes/hour = 50 minutes. Actual time - Time lost = 6:00 PM - 0:50 PM = 4:50 PM"
  },
  {
    id: "7",
    type: "QUANTITATIVE",
    question: "If a principal of Rs. 10,000 amounts to Rs. 12,100 in 2 years at simple interest, find the rate of interest per annum.",
    options: ["5%", "10%", "11%", "12%"],
    correctAnswer: "10%",
    timeLimit: 120,
    difficulty: "medium",
    explanation: "Simple Interest = Amount - Principal = Rs. 12,100 - Rs. 10,000 = Rs. 2,100. Simple Interest = (Principal * Rate * Time) / 100. Rate = (Simple Interest * 100) / (Principal * Time) = (2100 * 100) / (10000 * 2) = 10.5% ≈ 10%"
  },
  {
    id: "8",
    type: "QUANTITATIVE",
    question: "Find the next number in the series: 2, 5, 10, 17, 26, ...",
    options: ["35", "36", "37", "38"],
    correctAnswer: "37",
    timeLimit: 120,
    difficulty: "hard",
    explanation: "The difference between consecutive numbers increases by 1: 5-2=3, 10-5=5, 17-10=7, 26-17=9. The next difference should be 11. Therefore, the next number is 26 + 11 = 37"
  },
  {
    id: "9",
    type: "QUANTITATIVE",
    question: "A rectangle has a length of 12 cm and a width of 8 cm. What is the length of its diagonal?",
    options: ["10 cm", "14 cm", "16 cm", "20 cm"],
    correctAnswer: "14 cm",
    timeLimit: 90,
    difficulty: "medium",
    explanation: "Using Pythagoras theorem: Diagonal² = Length² + Width² = 12² + 8² = 144 + 64 = 208. Diagonal = √208 ≈ 14 cm"
  },
  {
    id: "10",
    type: "QUANTITATIVE",
    question: "If a car travels 180 km in 3 hours, what is its average speed in meters per second?",
    options: ["16.67 m/s", "18 m/s", "20 m/s", "22 m/s"],
    correctAnswer: "16.67 m/s",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Average speed = Total distance / Total time = 180 km / 3 hours = 60 km/h. 60 km/h = 60 * (1000 m/km) / (3600 s/h) = 16.67 m/s"
  },
  {
    id: "11",
    type: "QUANTITATIVE",
    question: "A shopkeeper buys a product for Rs. 100 and sells it at a profit of 20%. What is the selling price of the product?",
    options: ["Rs. 80", "Rs. 120", "Rs. 150", "Rs. 200"],
    correctAnswer: "Rs. 120",
    timeLimit: 90,
    difficulty: "medium",
    explanation: "Profit = Selling Price - Cost Price = (20/100) * 100 = 20. Selling Price = Cost Price + Profit = 100 + 20 = Rs. 120"
  },

  {
    id: "12",
    type: "QUANTITATIVE",
    question: "If a principal of Rs. 10,000 amounts to Rs. 12,100 in 2 years at simple interest, find the rate of interest per annum.",
    options: ["5%", "10%", "11%", "12%"],
    correctAnswer: "10%",
    timeLimit: 120,
    difficulty: "medium",
    explanation: "Simple Interest = Amount - Principal = Rs. 12,100 - Rs. 10,000 = Rs. 2,100. Simple Interest = (Principal * Rate * Time) / 100. Rate = (Simple Interest * 100) / (Principal * Time) = (2100 * 100) / (10000 * 2) = 10.5% ≈ 10%"
  },
  {
    id: "13",
    type: "QUANTITATIVE",
    question: "If the compound interest on a sum of Rs. 10,000 at 10% per annum for 2 years is Rs. 2,100, find the sum if the interest was compounded annually.",
    options: ["Rs. 12,100", "Rs. 12,100.5", "Rs. 12,210", "Rs. 12,310"],
    correctAnswer: "Rs. 12,100.5",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Compound Interest = P(1 + r/100)^t - P = 10000(1 + 10/100)^2 - 10000 = 10000(1.1)^2 - 10000 = Rs. 12,100.5"
  },
  {
    id: "14",
    type: "QUANTITATIVE",
    question: "A sum of Rs. 8,000 becomes Rs. 9,261 in 2 years at compound interest. What is the rate of interest per annum?",
    options: ["6%", "7%", "8%", "10%"],
    correctAnswer: "7%",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Compound Interest Formula: A = P(1 + r/100)^t. 9261 = 8000(1 + r/100)^2. (1 + r/100)^2 = 1.157625. 1 + r/100 = 1.07. r = 7%"
  },
  {
    id: "15",
    type: "QUANTITATIVE",
    question: "Solve for x in the equation: log(x) + log(x-3) = log(10).",
    options: ["5", "6", "7", "8"],
    correctAnswer: "5",
    timeLimit: 120,
    difficulty: "hard",
    explanation: "Using log(a) + log(b) = log(ab), log(x(x-3)) = log(10). x(x-3) = 10. x^2 - 3x - 10 = 0. Solving gives x = 5 or x = -2. Only x = 5 is valid."
  },
  {
    id: "16",
    type: "QUANTITATIVE",
    question: "A pipe can fill a tank in 6 hours. Another pipe can empty the tank in 9 hours. How long will it take to fill the tank if both pipes are opened together?",
    options: ["12 hours", "15 hours", "18 hours", "9 hours"],
    correctAnswer: "18 hours",
    timeLimit: 120,
    difficulty: "hard",
    explanation: "Rate of filling = 1/6, rate of emptying = -1/9. Net rate = 1/6 - 1/9 = 1/18. Time = 1 / (1/18) = 18 hours."
  },
  {
    id: "17",
    type: "QUANTITATIVE",
    question: "Find the smallest 5-digit number divisible by 12, 15, and 20.",
    options: ["10020", "10080", "10100", "10200"],
    correctAnswer: "10080",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "LCM of 12, 15, 20 = 60. Smallest 5-digit number is 10000. 10000 ÷ 60 gives remainder 40. Adding 20 gives 10080, which is divisible by 60."
  },
  {
    id: "18",
    type: "QUANTITATIVE",
    question: "The sum of squares of three numbers is 38, and the sum of their products taken two at a time is 40. Find the sum of the numbers.",
    options: ["7", "8", "9", "10"],
    correctAnswer: "7",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Let numbers be a, b, c. (a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca). Substituting: (a+b+c)^2 = 38 + 40 = 78. a+b+c = √78 ≈ 7."
  },
  {
    id: "19",
    type: "QUANTITATIVE",
    question: "The ratio of the ages of A and B is 4:5. If the sum of their ages is 72 years, find their ages.",
    options: ["32, 40", "28, 44", "30, 42", "24, 48"],
    correctAnswer: "32, 40",
    timeLimit: 120,
    difficulty: "hard",
    explanation: "Let ages be 4x and 5x. 4x + 5x = 72. 9x = 72. x = 8. Ages = 4x = 32, 5x = 40."
  },
  {
    id: "20",
    type: "QUANTITATIVE",
    question: "A mixture contains alcohol and water in the ratio 5:2. If 14 liters of water are added, the ratio becomes 5:4. Find the initial amount of alcohol.",
    options: ["25 liters", "30 liters", "35 liters", "40 liters"],
    correctAnswer: "35 liters",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Let alcohol = 5x and water = 2x. Adding water: (5x) / (2x + 14) = 5/4. Solving gives x = 7. Alcohol = 5x = 35 liters."
  },
  {
    id: "21",
    type: "QUANTITATIVE",
    question: "A man invests Rs. 20,000 at 5% per annum compounded annually. Find the amount after 3 years.",
    options: ["Rs. 22,050", "Rs. 23,152.50", "Rs. 23,205", "Rs. 23,500"],
    correctAnswer: "Rs. 23,152.50",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Compound Interest Formula: A = P(1 + r/100)^t. A = 20000(1 + 5/100)^3 = 20000(1.05)^3 ≈ Rs. 23,152.50."
  },
  {
    id: "22",
    type: "QUANTITATIVE",
    question: "Solve: √(49x^2 + 84x + 36) = 0.",
    options: ["-6/7", "-3/7", "3/7", "6/7"],
    correctAnswer: "-6/7",
    timeLimit: 150,
    difficulty: "hard",
    explanation: "Simplify inside the square root: (7x + 6)^2 = 0. Solve 7x + 6 = 0. x = -6/7."
  },

  {
  id: "23",
  type: "VERBAL",
  question: "Choose the word that is most similar in meaning to 'ELOQUENT'.",
  options: ["Fluent", "Stubborn", "Silent", "Weak"],
  correctAnswer: "Fluent",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Eloquent means fluent or persuasive in speaking or writing."
},
{
  id: "24",
  type: "VERBAL",
  question: "Find the antonym of the word 'PROLIFIC'.",
  options: ["Productive", "Unproductive", "Fruitful", "Abundant"],
  correctAnswer: "Unproductive",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Prolific means producing in large quantities, while unproductive means not producing much."
},
{
  id: "25",
  type: "VERBAL",
  question: "Choose the correct meaning of the idiom: 'Burning the midnight oil'.",
  options: ["To be angry", "To work late into the night", "To be tired", "To celebrate"],
  correctAnswer: "To work late into the night",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The idiom 'burning the midnight oil' means working late into the night."
},
{
  id: "26",
  type: "VERBAL",
  question: "Which of the following is closest in meaning to 'ABHOR'?",
  options: ["To like", "To hate", "To admire", "To forgive"],
  correctAnswer: "To hate",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Abhor means to regard with disgust or hatred."
},
{
  id: "27",
  type: "VERBAL",
  question: "Which word is the opposite of 'AUSTERITY'?",
  options: ["Luxury", "Simplicity", "Frugality", "Moderation"],
  correctAnswer: "Luxury",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Austerity refers to the state of being severe or strict, especially in spending, while luxury refers to indulgence in comfort and extravagant living."
},
{
  id: "28",
  type: "VERBAL",
  question: "Which word is most similar in meaning to 'PERSUASIVE'?",
  options: ["Convincing", "Unclear", "Indifferent", "Weak"],
  correctAnswer: "Convincing",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Persuasive means having the ability to convince others."
},
{
  id: "29",
  type: "VERBAL",
  question: "Identify the sentence that is grammatically correct:",
  options: ["Neither the teacher nor the students was ready.", "Neither the teacher nor the students were ready.", "Neither the teacher nor the students is ready.", "Neither the teacher nor the students are ready."],
  correctAnswer: "Neither the teacher nor the students were ready.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "In sentences with 'neither...nor', the verb agrees with the noun closer to it. Since 'students' is plural, the correct form is 'were'."
},
{
  id: "30",
  type: "VERBAL",
  question: "What is the meaning of the word 'OBSCURE'?",
  options: ["Clear", "Unclear", "Famous", "Bright"],
  correctAnswer: "Unclear",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Obscure means not well known or unclear."
},
{
  id: "31",
  type: "VERBAL",
  question: "Which of the following is the correct synonym of 'CIRCUMSPECT'?",
  options: ["Careless", "Cautious", "Bold", "Daring"],
  correctAnswer: "Cautious",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Circumspect means being cautious or careful."
},
{
  id: "32",
  type: "VERBAL",
  question: "Choose the word that is closest in meaning to 'REBUKE'.",
  options: ["Praise", "Criticism", "Support", "Encourage"],
  correctAnswer: "Criticism",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Rebuke means to express sharp disapproval or criticism."
},

{
  id: "33",
  type: "VERBAL",
  question: "Choose the sentence that uses the word 'perplex' correctly.",
  options: [
    "The complex instructions perplexed the students.",
    "The teacher was perplex about the student's answer.",
    "I perplex to understand his reasoning.",
    "Her perplex smile made everyone uncomfortable."
  ],
  correctAnswer: "The complex instructions perplexed the students.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "'Perplex' means to confuse or puzzle. The correct usage is in the first sentence."
},
{
  id: "34",
  type: "VERBAL",
  question: "What is the meaning of the phrase 'a blessing in disguise'?",
  options: [
    "A good thing that appears bad at first",
    "A secret blessing",
    "A formal blessing",
    "A curse that turns into good luck"
  ],
  correctAnswer: "A good thing that appears bad at first",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The phrase 'a blessing in disguise' refers to something that seems bad at first but later turns out to be beneficial."
},
{
  id: "35",
  type: "VERBAL",
  question: "What is the tone of the following passage: 'She smiled faintly, her eyes dull and tired, as she walked into the room.'",
  options: [
    "Optimistic",
    "Melancholic",
    "Angry",
    "Excited"
  ],
  correctAnswer: "Melancholic",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The description of the character's faint smile and dull, tired eyes creates a melancholic or sorrowful tone."
},
{
  id: "36",
  type: "VERBAL",
  question: "Identify the error in the following sentence: 'Each of the students have submitted their project.'",
  options: [
    "Each of the students is singular, so the verb should be 'has'.",
    "The word 'submitted' is incorrect.",
    "The sentence is grammatically correct.",
    "There should be 'his or her' instead of 'their'."
  ],
  correctAnswer: "Each of the students is singular, so the verb should be 'has'.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The subject 'each' is singular, so the correct verb is 'has' instead of 'have'."
},
{
  id: "37",
  type: "VERBAL",
  question: "What is the meaning of the expression 'to take the bull by the horns'?",
  options: [
    "To avoid difficult situations",
    "To face a difficult situation directly",
    "To be strong in character",
    "To make a decision without thinking"
  ],
  correctAnswer: "To face a difficult situation directly",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The phrase 'to take the bull by the horns' means to confront a difficult or challenging situation with courage."
},
{
  id: "38",
  type: "VERBAL",
  question: "Which of the following sentences contains a misplaced modifier?",
  options: [
    "She almost drove her car into the tree.",
    "Running late, he hurried to the meeting.",
    "The book on the shelf is mine.",
    "I saw a dog in the yard."
  ],
  correctAnswer: "She almost drove her car into the tree.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The modifier 'almost' is misplaced in the sentence. It should modify 'drove,' not 'her car into the tree.'"
},
{
  id: "39",
  type: "VERBAL",
  question: "Which of the following best completes the analogy: 'Book is to Reading as Fork is to ___'?",
  options: [
    "Eating",
    "Writing",
    "Cooking",
    "Serving"
  ],
  correctAnswer: "Eating",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "A book is used for reading, just as a fork is used for eating."
},
{
  id: "40",
  type: "VERBAL",
  question: "Which of the following sentences contains a gerund?",
  options: [
    "I am excited to visit Paris.",
    "He is studying for his exam.",
    "She likes swimming in the ocean.",
    "They will leave soon."
  ],
  correctAnswer: "She likes swimming in the ocean.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "A gerund is the -ing form of a verb used as a noun. 'Swimming' is the gerund in this sentence."
},
{
  id: "41",
  type: "VERBAL",
  question: "Choose the sentence that correctly uses parallel structure:",
  options: [
    "I enjoy reading, writing, and to swim.",
    "I enjoy reading, writing, and swimming.",
    "I enjoy to read, writing, and swimming.",
    "I enjoy read, writing, and to swim."
  ],
  correctAnswer: "I enjoy reading, writing, and swimming.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Parallel structure requires that all elements in a series follow the same grammatical pattern. The correct structure is 'reading, writing, and swimming.'"
},
{
  id: "42",
  type: "VERBAL",
  question: "Which of the following best describes the function of a semicolon?",
  options: [
    "It connects two independent clauses that are closely related.",
    "It separates items in a list.",
    "It joins two ideas with a conjunction.",
    "It introduces a direct quotation."
  ],
  correctAnswer: "It connects two independent clauses that are closely related.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "A semicolon is used to link two independent clauses that are closely related but not joined by a conjunction."
},

{
  id: "43",
  type: "LOGICAL",
  question: "If all roses are flowers and some flowers fade quickly, which of the following statements must be true?",
  options: [
    "All roses fade quickly.",
    "Some roses fade quickly.",
    "No roses fade quickly.",
    "All flowers fade quickly."
  ],
  correctAnswer: "Some roses fade quickly.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Since 'some flowers fade quickly' and 'all roses are flowers,' it follows that some roses must also fade quickly."
},
{
  id: "44",
  type: "LOGICAL",
  question: "In a group of 20 people, 12 like tea, 15 like coffee, and 8 like both tea and coffee. How many people like only tea?",
  options: [
    "4",
    "7",
    "8",
    "12"
  ],
  correctAnswer: "7",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Using the principle of inclusion and exclusion, the number of people who like only tea is 12 (like tea) - 8 (like both) = 7."
},
{
  id: "45",
  type: "LOGICAL",
  question: "If two pencils cost $1.50, how much will 8 pencils cost?",
  options: [
    "$3",
    "$4",
    "$6",
    "$12"
  ],
  correctAnswer: "$6",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The cost of 1 pencil is $1.50 / 2 = $0.75. Therefore, the cost of 8 pencils is 8 * $0.75 = $6."
},
{
  id: "46",
  type: "LOGICAL",
  question: "A clock shows the time as 3:15. What is the angle between the hour and the minute hands?",
  options: [
    "7.5 degrees",
    "22.5 degrees",
    "30 degrees",
    "45 degrees"
  ],
  correctAnswer: "7.5 degrees",
  timeLimit: 150,
  difficulty: "hard",
  explanation: "At 3:00, the hour hand is at 90 degrees. At 3:15, the hour hand moves 1/4 of the way towards 4. Therefore, the angle between the hands is 90 + (1/4 * 30) = 90 + 7.5 = 97.5 degrees."
},
{
  id: "47",
  type: "LOGICAL",
  question: "In a class of 30 students, 18 play football, 12 play basketball, and 5 play both. How many students play neither football nor basketball?",
  options: [
    "5",
    "7",
    "10",
    "12"
  ],
  correctAnswer: "7",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Using the principle of inclusion and exclusion, the number of students who play either football or basketball is 18 + 12 - 5 = 25. Therefore, 30 - 25 = 7 students play neither sport."
},
{
  id: "48",
  type: "LOGICAL",
  question: "If A is taller than B, and B is taller than C, which of the following must be true?",
  options: [
    "A is taller than C.",
    "C is taller than A.",
    "B is taller than A.",
    "C is shorter than B."
  ],
  correctAnswer: "A is taller than C.",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "By the transitive property of inequalities, if A > B and B > C, then A > C."
},
{
  id: "49",
  type: "LOGICAL",
  question: "If the first two statements are true, is the final statement true? 1) All cats are animals. 2) All animals are mammals. 3) All cats are mammals.",
  options: [
    "True",
    "False",
    "Cannot be determined",
    "None of the above"
  ],
  correctAnswer: "True",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "From the premises, since all cats are animals and all animals are mammals, it logically follows that all cats are mammals."
},
{
  id: "50",
  type: "LOGICAL",
  question: "If you rearrange the letters of the word 'ELECTION', which of the following words can be formed?",
  options: [
    "CITATION",
    "LOCATION",
    "ELECT",
    "ELECTED"
  ],
  correctAnswer: "CITATION",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Rearranging the letters of 'ELECTION' can form the word 'CITATION'."
},
{
  id: "51",
  type: "LOGICAL",
  question: "If today is Thursday, what day of the week will it be 500 days from now?",
  options: [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday"
  ],
  correctAnswer: "Saturday",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "Since there are 7 days in a week, 500 days = 500 % 7 = 3. Counting 3 days from Thursday gives us Saturday."
},
{
  id: "52",
  type: "LOGICAL",
  question: "A train leaves a station at 8 AM and travels at 50 km/h. Another train leaves the same station at 9 AM and travels at 75 km/h. At what time will the second train catch up to the first train?",
  options: [
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM"
  ],
  correctAnswer: "12 PM",
  timeLimit: 120,
  difficulty: "hard",
  explanation: "The first train has a 1-hour head start, traveling 50 km. The second train is closing the gap at a rate of 75 km/h - 50 km/h = 25 km/h. To cover the 50 km gap, the second train will take 50 km / 25 km/h = 2 hours. Therefore, it will catch up at 9 AM + 2 hours = 12 PM."
},

{
  id: "53",
  type: "LOGICAL",
  question: "If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
  options: [
    "5",
    "10",
    "100",
    "1"
  ],
  correctAnswer: "5",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "The number of cats required is independent of the number of mice or time, as 5 cats can catch 5 mice in 5 minutes, so 5 cats can catch 100 mice in 100 minutes."
},
{
  id: "54",
  type: "LOGICAL",
  question: "If John is older than Peter, and Peter is older than Susan, who is the youngest?",
  options: [
    "John",
    "Peter",
    "Susan",
    "Cannot be determined"
  ],
  correctAnswer: "Susan",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "Since John is older than Peter, and Peter is older than Susan, Susan must be the youngest."
},
{
  id: "55",
  type: "LOGICAL",
  question: "If it rains, the ground will be wet. It is raining. What can we conclude?",
  options: [
    "The ground is dry.",
    "The ground is wet.",
    "The ground may or may not be wet.",
    "None of the above"
  ],
  correctAnswer: "The ground is wet.",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "Based on the statement 'if it rains, the ground will be wet' and the fact that it is raining, we can conclude that the ground is wet."
},
{
  id: "56",
  type: "LOGICAL",
  question: "A clock shows the time as 4:00. What is the angle between the hour and minute hands?",
  options: [
    "90 degrees",
    "120 degrees",
    "180 degrees",
    "360 degrees"
  ],
  correctAnswer: "120 degrees",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "At 4:00, the hour hand is at 120 degrees (since each hour represents 30 degrees and 4 * 30 = 120 degrees)."
},
{
  id: "57",
  type: "LOGICAL",
  question: "If two pencils cost $1.00, how much will 10 pencils cost?",
  options: [
    "$5.00",
    "$10.00",
    "$2.00",
    "$1.00"
  ],
  correctAnswer: "$5.00",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "The cost of one pencil is $1.00 / 2 = $0.50. Therefore, the cost of 10 pencils is 10 * $0.50 = $5.00."
},
{
  id: "58",
  type: "LOGICAL",
  question: "If all apples are fruits and some fruits are red, can we conclude that some apples are red?",
  options: [
    "Yes",
    "No",
    "Cannot be determined",
    "All apples are red"
  ],
  correctAnswer: "Cannot be determined",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "While some fruits are red, it is not specified if apples are part of those red fruits. Therefore, we cannot determine if some apples are red."
},
{
  id: "59",
  type: "LOGICAL",
  question: "Which number comes next in the series: 1, 4, 9, 16, ...?",
  options: [
    "20",
    "24",
    "25",
    "30"
  ],
  correctAnswer: "25",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "The series consists of perfect squares: 1^2, 2^2, 3^2, 4^2. The next perfect square is 5^2 = 25."
},
{
  id: "60",
  type: "LOGICAL",
  question: "If a train travels at 60 km/h for 2 hours, how far will it travel?",
  options: [
    "60 km",
    "120 km",
    "180 km",
    "240 km"
  ],
  correctAnswer: "120 km",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "Distance = Speed * Time = 60 km/h * 2 hours = 120 km."
},
{
  id: "61",
  type: "LOGICAL",
  question: "Which of the following is not a part of the human body?",
  options: [
    "Lung",
    "Liver",
    "Heart",
    "Leaf"
  ],
  correctAnswer: "Leaf",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "A leaf is part of a plant, not the human body."
},
{
  id: "62",
  type: "LOGICAL",
  question: "If all squares are rectangles, and all rectangles are parallelograms, which of the following must be true?",
  options: [
    "All squares are parallelograms.",
    "All rectangles are squares.",
    "All parallelograms are squares.",
    "None of the above"
  ],
  correctAnswer: "All squares are parallelograms.",
  timeLimit: 120,
  difficulty: "easy",
  explanation: "Since all squares are rectangles and all rectangles are parallelograms, it follows that all squares must be parallelograms."
},

// {
//   id: "77",
//   type: "CODING",
//   question: "What will be the output of the following Python code?\n\n```python\nx = 5\nx += 2\nprint(x)\n```",
//   options: [
//     "7",
//     "5",
//     "2",
//     "8"
//   ],
//   correctAnswer: "7",
//   timeLimit: 60,
//   difficulty: "easy",
//   explanation: "The value of x is incremented by 2, so the output is 7."
// },
// {
//   id: "78",
//   type: "CODING",
//   question: "Which of the following Python code snippets will correctly return the first element of a list?",
//   options: [
//     "list[0]",
//     "list[-1]",
//     "list[1]",
//     "list.get(0)"
//   ],
//   correctAnswer: "list[0]",
//   timeLimit: 60,
//   difficulty: "easy",
//   explanation: "In Python, the first element of a list can be accessed using index 0."
// },
// {
//   id: "79",
//   type: "CODING",
//   question: "What will the following Python code output?\n\n```python\nx = 'Hello'\ny = 'World'\nprint(x + y)\n```",
//   options: [
//     "HelloWorld",
//     "Hello World",
//     "Hello",
//     "World"
//   ],
//   correctAnswer: "HelloWorld",
//   timeLimit: 60,
//   difficulty: "easy",
//   explanation: "The '+' operator concatenates the two strings, so the output is 'HelloWorld'."
// },
// {
//   id: "80",
//   type: "CODING",
//   question: "Which of the following JavaScript code snippets will correctly print 'Hello, World!' to the console?",
//   options: [
//     "console.print('Hello, World!');",
//     "console.log('Hello, World!');",
//     "print('Hello, World!');",
//     "echo 'Hello, World!';"
//   ],
//   correctAnswer: "console.log('Hello, World!');",
//   timeLimit: 60,
//   difficulty: "easy",
//   explanation: "In JavaScript, the correct method to print to the console is `console.log`."
// },
// {
//   id: "81",
//   type: "CODING",
//   question: "Which of the following Python code snippets will correctly create an empty list?",
//   options: [
//     "[]",
//     "list()",
//     "{}",
//     "set()"
//   ],
//   correctAnswer: "[]",
//   timeLimit: 60,
//   difficulty: "easy",
//   explanation: "In Python, an empty list can be created using '[]' or the 'list()' function."
// },


  

    {
    id: '65',
    type: 'CODING',
    question: 'Complete this factorial implementation by filling in the blanks (____). Each blank requires a single word/value:\n\njavascript\nfunction factorial(n) {\n  if (n <= [A]____) {  // Base case check\n    return [B]____;  // What to return for base case?\n  }\n  \n  return n * factorial(n - [C]____);  // What to subtract in recursive call?\n}\n\nconsole.log(factorial([D]____));  // Test with what number?\n\n\n',
    options: [
    'null, undefined, 2, 10',
    '-1, 0, 3, 15',
    '1, 1, 1, 5',
    '0, 2, 0, 3'
    ],
    answers: ['1, 1, 1, 5'],
    timeLimit: 180,
    difficulty: 'medium',
    explanation: 'The correct answers are:\n1. 1 (base case when n reaches 1)\n2. 1 (factorial of 1 is 1)\n3. 1 (decrement by 1 in recursive call)\n4. 5 (test factorial with n=5)',
    blanksCount: 4
    },

    {
    id: '66',
    type: 'CODING',
    question: 'Complete this array reversal implementation by filling in the blanks (____). Each blank requires a single word/value:\n\njavascript\nfunction reverseArray(arr) {\n  let left = [A]____;  // Start index\n  let right = arr.length - [B]____;  // End index\n  \n  while (left < right) {\n    let temp = [C]____[left];  // Store left element\n    arr[left] = arr[right];\n    arr[right] = [D]____;  // Complete the swap\n    left++;\n    right--;\n  }\n  return arr;\n}\n\n\n',
    options: [
    'null, 2, list, val',
    '-1, 0, nums, item',
    '1, 2, data, swap',
    '0, 1, arr, temp'
    ],
    answers: ['0, 1, arr, temp'],
    timeLimit: 180,
    difficulty: 'medium',
    explanation: 'The correct answers are:\n1. 0 (start from first element)\n2. 1 (end at last element)\n3. arr (access array element)\n4. temp (complete swap with stored value)',
    blanksCount: 4
    },

    {
    id: '67',
    type: 'CODING',
    question: 'Complete this string palindrome checker by filling in the blanks (____). Each blank requires a single word/value:\n\njavascript\nfunction isPalindrome(str) {\n  str = str.[A]____().toLowerCase();  // Remove spaces\n  let left = [B]____;  // Start index\n  let right = str.length - 1;\n  \n  while ([C]____ < right) {\n    if (str[left] !== str[D]____) {  // Compare with what?\n      return false;\n    }\n    left++;\n    right--;\n  }\n  return true;\n}\n\n\n',
    options: ['strip, 1, i, left','clean, -1, j, i','trim, 0, left, right','clear, null, index, j'],
    answers: ['trim, 0, left, right'],
    timeLimit: 180,
    difficulty: 'medium',
    explanation: 'The correct answers are:\n1. trim (remove whitespace)\n2. 0 (start from first character)\n3. left (compare positions)\n4. right (compare with right character)',
    blanksCount: 4
    },

    {
    id: '68',
    type: 'CODING',
    question: 'Complete this power function implementation by filling in the blanks (____). Each blank requires a single word/value:\n\njavascript\nfunction power(base, exponent) {\n  if (exponent === [A]____) {  // Base case\n    return [B]____;  // What to return?\n  }\n  \n  if (exponent < 0) {\n    return [C]____ / power(base, -exponent);  // Handle negative exponent\n  }\n  \n  return [D]____ * power(base, exponent - 1);  // Recursive case\n}\n\n\n',
    options: [
    '-1, 2, base, val',
    '1, 0, temp, result', 
    'null, undefined, 1, power',
    '0, 1, 1, base'
    ],
    answers: ['0, 1, 1, base'],
    timeLimit: 180,
    difficulty: 'hard',
    explanation: 'The correct answers are:\n1. 0 (base case when exponent is 0)\n2. 1 (any number to power 0 is 1)\n3. 1 (numerator for negative exponents)\n4. base (multiply base in recursive step)',
    blanksCount: 4
    },
  
];