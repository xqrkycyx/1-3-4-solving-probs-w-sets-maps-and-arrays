/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const charCountMap = new Map();

  // Count occurrences of each character in the word
  for (const char of word) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  // Find the first character with a count of 1
  for (const char of word) {
    if (charCountMap.get(char) === 1) {
      return char;
    }
  }

  // If no single characters are found, return null
  return null;
}

module.exports = firstSingleCharacter;
