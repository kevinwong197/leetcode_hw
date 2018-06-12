/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longest = '';
  for (let i = 0; i < s.length; i++) {
    var substring = '';
    for (let j = i; j < s.length && substring.indexOf(s[j]) <= -1; j++) {
      substring += s[j];
    }
    if (substring.length > longest.length) {
      longest = substring;
    }
  }
  return longest.length;
};