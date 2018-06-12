/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var size = nums1.length + nums2.length;
  var steps = (size % 2 != 0) ? Math.ceil(size / 2) : (size / 2);
  var i1 = -1;
  var i2 = -1;
  while (steps > 0) {
    steps--;
    if (!nums1[i1+1] || nums1[i1+1] > nums2[i2+1]) {
      i2++;
    } else {
      i1++;
    }
  }
  if (size % 2 != 0) {
    return (!nums2[i2] || nums1[i1] > nums2[i2]) ? nums1[i1] : nums2[i2];
  } else {
    var num1 = (!nums2[i2] || nums1[i1] > nums2[i2]) ? nums1[i1] : nums2[i2];
    var num2 = (!nums2[i2+1] || nums1[i1+1] < nums2[i2+1]) ? nums1[i1+1] : nums2[i2+1];
    return (num1 + num2) / 2;
  }
};