/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const str = x.toString();
    const chars = [...str].reverse();

    let r = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== chars[i]) {
            r = false;
            break;
        }
    }

    return r;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(0))