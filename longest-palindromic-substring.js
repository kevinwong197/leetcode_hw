/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var longest = '';
  var expand = function(left, right) {
    while (s[left-1] != null && s[right+1] != null && s[left-1] == s[right+1]) {
      left--;
      right++;
    }
    if (right - left + 1 > longest.length) {
      longest = s.slice(left, right+1);
    }
  }
  for(let center = 0; center < s.length; center++) {
    expand(center, center);
    if(s[center+1] && s[center] == s[center+1]) {
      expand(center, center+1);
    }
  }
  return longest;
};