/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const anagramMap = new Map();

  // Iterate through each word
  for (const word of words) {
    // Sort the characters of the word
    const sortedWord = word.split("").sort().join("");

    // Check if the sorted word exists in the map
    if (anagramMap.has(sortedWord)) {
      // Add the word to the existing anagram group
      anagramMap.get(sortedWord).push(word);
    } else {
      // Create a new anagram group with the sorted word
      anagramMap.set(sortedWord, [word]);
    }
  }

  // Convert map values to array of arrays
  return Array.from(anagramMap.values());
}

module.exports = anagramGroups;
