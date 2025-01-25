
var romanToInt = function(s) {
    var result = 0;

  //using a hashmap to hold values
    const romanMap = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
    }

  //Using a temporary negative method to find the whole value of the input
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];
        const nextValue = romanMap[s[i+1]];
        
        if (nextValue && currentValue < nextValue) {
            result -= currentValue;
        }   else {
            result += currentValue;
        }
    }
    return result;
};
