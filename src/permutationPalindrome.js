/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const charCountMap = new Map();

  // Count occurrences of each character in the word
  for (const char of word) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  // Count how many characters have odd counts
  let oddCount = 0;
  for (const count of charCountMap.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // If there's more than one character with an odd count, palindrome isn't possible
  return oddCount <= 1;
}

module.exports = permutationPalindrome;
