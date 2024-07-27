
const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const size = s.length - 1
    
    let r = 0
    for (let i = size; i >= 0; i--) {
        const current = map[s[i]]
        if (i != size && current < map[s[i + 1]]) {
            r -= current;
        } else {
            r += current;
        }
    }  

    return r
};