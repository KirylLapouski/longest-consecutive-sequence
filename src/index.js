module.exports = function longestConsecutiveLength(array) {
  if (array.length === 1) return 1;
  if (array.length === 0) return 0
  array.sort((a, b)=> a>b?1:-1);
  let max = 1,counter = 1;
  for (let i = 1; i <= array.length; ++i) {
    if (array[i] === array[i - 1]) continue;
    if (array[i] - 1 === array[i - 1]) {
      counter++;
    } else {
      counter = 1;
    }
    max = Math.max(counter, max);
  }
  return max;
}
