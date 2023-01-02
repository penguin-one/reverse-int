module.exports = function reverse (n) {
  const nStr = String(Math.abs(n));
  return Number(nStr.split('').reverse().join(''));
}
