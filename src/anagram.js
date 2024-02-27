/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  // Check if the lengths of the strings are different
  if (s1.length !== s2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and join back to strings
  const sortedS1 = s1.split("").sort().join("");
  const sortedS2 = s2.split("").sort().join("");

  // Compare the sorted strings
  return sortedS1 === sortedS2;
}

module.exports = anagram;
