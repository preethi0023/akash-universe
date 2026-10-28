// ============================================================
//  EDIT EVERYTHING HERE. No other file needs to change.
//  Text in [BRACKETS] is a placeholder: replace it with your own.
//  Keep the quotes and commas. Each string in a "paragraph" list is one paragraph.
// ============================================================

// OUR STORY: timeline (add or remove items freely)
export const timeline = [
  { when: '[Date or season]', title: '[How it began]', text: '[A few words about this moment.]' },
  { when: '[Date or season]', title: '[A moment you love]', text: '[A few words about this moment.]' },
  { when: '[Date or season]', title: '[Something we laughed about]', text: '[A few words about this moment.]' },
  { when: '[Date or season]', title: '[Today, and what comes next]', text: '[A few words about this moment.]' },
];

// Memory cards. Tap to flip.
export const memories = [
  { front: '[Memory title 1]', back: '[Describe this memory in your own words.]' },
  { front: '[Memory title 2]', back: '[Describe this memory in your own words.]' },
  { front: '[Memory title 3]', back: '[Describe this memory in your own words.]' },
];

// Hidden gold envelopes. Tap to open.
export const envelopes = ['[A short note for Akash to find.]', '[Something you love about him.]', '[A small promise.]'];

export const storyLetter = {
  paragraphs: [
    '[Write your letter here.]',
    '[Add as many paragraphs as you like.]',
    'Among all the possibilities in this universe, I would still choose you.',
  ],
  sign: '— Preethi',
};

// GAME A: LOVE QUIZ. "answer" = position of the correct option, starting at 0.
export const loveQuiz = {
  title: 'The Love Quiz',
  questions: [
    { q: '[Question 1]', options: ['[Option A]', '[Option B]', '[Option C]'], answer: 0 },
    { q: '[Question 2]', options: ['[Option A]', '[Option B]', '[Option C]'], answer: 1 },
    { q: '[Question 3]', options: ['[Option A]', '[Option B]', '[Option C]'], answer: 2 },
    { q: '[Question 4]', options: ['[Option A]', '[Option B]', '[Option C]'], answer: 0 },
    { q: '[Question 5]', options: ['[Option A]', '[Option B]', '[Option C]'], answer: 1 },
  ],
  // Low score, middle score, top score (in that order)
  results: ['Every answer is a chance to learn more about each other.', 'So close. You know me better than you think.', 'You know me beautifully.'],
};

// GAME B: HOW WELL DO YOU KNOW US? (any number of questions)
export const knowUs = {
  title: 'How Well Do You Know Us?',
  questions: [
    { q: '[Question 1]', options: ['[Option A]', '[Option B]', '[Option C]', '[Option D]'], answer: 0 },
    { q: '[Question 2]', options: ['[Option A]', '[Option B]', '[Option C]', '[Option D]'], answer: 1 },
    { q: '[Question 3]', options: ['[Option A]', '[Option B]', '[Option C]', '[Option D]'], answer: 2 },
    { q: '[Question 4]', options: ['[Option A]', '[Option B]', '[Option C]', '[Option D]'], answer: 3 },
  ],
  results: ['We have so much left to discover together.', 'You know us well.', 'You know us perfectly.'],
};

// GAME C: FIND THE GOLDEN HEART
export const heartGame = {
  hearts: 6,
  secret: 'You found it. [Write your secret message here.]',
  wrong: ['Not this one. Try another.', 'Empty. The gold is hiding elsewhere.', 'Close, but not quite.'],
};

// GAME D: UNLOCK THE LOVE LETTER
export const riddle = {
  question: '[Write your romantic riddle here.]',
  answers: ['[answer one]', '[another accepted spelling]'], // not case-sensitive
  hint: '[Optional hint shown after a wrong try.]',
  paragraphs: ['[The letter revealed after a correct answer.]', '[Add more paragraphs if you like.]'],
  sign: '— Preethi',
};

// FINAL SURPRISE
export const finale = {
  paragraphs: ['Akash, if this little universe could tell you one thing, it would be this: you make it special just by being in it.'],
  sign: 'With all my love,\nPreethi.',
  hugMessage: '[Write your final message here. It appears after the hug.]',
};
