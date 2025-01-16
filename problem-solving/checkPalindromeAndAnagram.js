function isPalindromeFunc(str1, str2) {
    if(str1 == null || str2 == null) return false;
    if(str1.length != str2.length) return false;
    for(let i=0; i<str1.length;i++) {
        if(str1[i] != str2[str2.length - 1 - i]) return false;
    }
    return true;
}

function isAnagramFunc(str1, str2) {
    const charMap1 = new Map();
    for(let i=0; i<str1.length;i++) {
        if(charMap1.has(str1[i])) {
            charMap1.set(str1[i], charMap1.get(str1[i]) + 1);
        } else charMap1.set(str1[i], 1);
    }
    
    charMap1.forEach((value, key) => {
        if(!charMap2.has(key)) return false;
        if(value != charMap2.get(key)) return false;
    });
    return true;
}

function checkPalindromeAndAnagram (str1, str2) {
    const result = {
        XY: "xy", // 

    }
    if(validateInputs(str1, str2)) return "xy";
    const isPalindome = isPalindromeFunc(str1, str2);
    const isAnagram = isAnagramFunc(str1, str2);

    return isPalindome ? "pa" : isAnagram ? "a" : "xy";
}

function validateInputs(str1, str2) {
    if(str1 == null || str2 == null) return false;
    if(str1.length != str2.length) return false;
}


console.log(checkPalindromeAndAnagram("cat", "tac"));
// console.log(checkPalindromeAndAnagram("tac", "cat"));

// console.log(checkPalindromeAndAnagram("act", "cat"));

// console.log(checkPalindromeAndAnagram("actz", "cat"));
// console.log(checkPalindromeAndAnagram("", "cat"));
// console.log(checkPalindromeAndAnagram(null, "cat"));
// console.log(checkPalindromeAndAnagram(null, ""));
// console.log(checkPalindromeAndAnagram("cat", null));
// console.log(checkPalindromeAndAnagram("", null));


