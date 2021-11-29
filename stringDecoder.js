const decoder = (code) => {
    let result = '';
    let nums = '0123456789';
    let boolFlipper = false;
    let parsed;
    for (let i = 0; i < code.length; i++) {
        if (boolFlipper) {
            boolFlipper = false;
            result += code[i];
        }
        if (nums.indexOf(code[i]) !== -1) {
            parsed = parseInt(code[i], 10);
            boolFlipper = true;
            i += (parsed);
        }
    }
    return result;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));