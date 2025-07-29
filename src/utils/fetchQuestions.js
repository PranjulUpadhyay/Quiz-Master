import shuffleArray from './shuffleArray';

/**
 * Quiz question fetching utility
 * Fetches questions from Open Trivia Database API with fallback questions
 */

// Backup questions in case API is unavailable
const fallbackQuestions = [
  {
    question: "What is the capital of France?",
    incorrect_answers: ["London", "Berlin", "Madrid"],
    correct_answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    incorrect_answers: ["Venus", "Jupiter", "Saturn"],
    correct_answer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    incorrect_answers: ["African Elephant", "Giraffe", "Great White Shark"],
    correct_answer: "Blue Whale"
  },
  {
    question: "In which year did World War II end?",
    incorrect_answers: ["1944", "1946", "1947"],
    correct_answer: "1945"
  },
  {
    question: "What is the chemical symbol for gold?",
    incorrect_answers: ["Go", "Gd", "Ag"],
    correct_answer: "Au"
  },
  {
    question: "Which programming language is known as the 'language of the web'?",
    incorrect_answers: ["Python", "Java", "C++"],
    correct_answer: "JavaScript"
  },
  {
    question: "What is the smallest country in the world?",
    incorrect_answers: ["Monaco", "Nauru", "San Marino"],
    correct_answer: "Vatican City"
  },
  {
    question: "Who painted the Mona Lisa?",
    incorrect_answers: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    correct_answer: "Leonardo da Vinci"
  },
  {
    question: "What is the fastest land animal?",
    incorrect_answers: ["Lion", "Leopard", "Gazelle"],
    correct_answer: "Cheetah"
  },
  {
    question: "Which ocean is the largest?",
    incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correct_answer: "Pacific Ocean"
  },
  {
    question: "What is the powerhouse of the cell?",
    incorrect_answers: ["Nucleus", "Ribosome", "Cytoplasm"],
    correct_answer: "Mitochondria"
  },
  {
    question: "In what year was the first iPhone released?",
    incorrect_answers: ["2006", "2008", "2009"],
    correct_answer: "2007"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    incorrect_answers: ["Gold", "Iron", "Quartz"],
    correct_answer: "Diamond"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    incorrect_answers: ["Oxygen", "Carbon Dioxide", "Hydrogen"],
    correct_answer: "Nitrogen"
  },
  {
    question: "What is the longest river in the world?",
    incorrect_answers: ["Amazon River", "Mississippi River", "Yangtze River"],
    correct_answer: "Nile River"
  }
];

/**
 * Main function to fetch quiz questions
 * Tries to get questions from API first, falls back to local questions if API fails
 * @returns {Promise<Array>} Array of formatted question objects
 */
export async function fetchQuestions() {
  try {
    // Attempt to fetch from Open Trivia Database API
    const res = await fetch("https://opentdb.com/api.php?amount=15");
    
    // Check if request was successful
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    
    // Validate API response structure
    if (!data || !data.results || !Array.isArray(data.results) || data.results.length === 0) {
      console.warn('API returned unexpected data structure, using fallback questions');
      return processFallbackQuestions();
    }
    
    // Format API questions for our app
    return data.results.map((q, idx) => {
      const choices = shuffleArray([...q.incorrect_answers, q.correct_answer]);
      return {
        id: idx,
        question: q.question,
        choices,
        correct: q.correct_answer,
      };
    });
      } catch (error) {
    // If API fails, use local fallback questions
    console.error('Error fetching questions from API:', error);
    return processFallbackQuestions();
  }
}

/**
 * Process fallback questions into the same format as API questions
 * @returns {Array} Array of formatted question objects
 */
function processFallbackQuestions() {
  return fallbackQuestions.map((q, idx) => {
    const choices = shuffleArray([...q.incorrect_answers, q.correct_answer]);
    return {
      id: idx,
      question: q.question,
      choices,
      correct: q.correct_answer,
    };
  });
}
