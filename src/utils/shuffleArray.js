/**
 * Utility function to randomly shuffle an array
 * Uses Fisher-Yates shuffle algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - New shuffled array (original is not modified)
 */
export default function shuffleArray(array) {
  // Create a copy to avoid modifying original array
  let a = array.slice();
  
  // Fisher-Yates shuffle algorithm
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]; // Swap elements
  }
  
  return a;
}
