/**
 * @description 统计元音字母——输入一个字符串，统计处其中元音字母的数量。更复杂点的话统计出每个元音字母的数量。
 * @param {String}
 * @return {Numbers}
 */

function vowel(str) {

    let Aa = "";
    Ee = "";
    Ii = "";
    Oo = "";
    Uu = "";

    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "A" || arr[i] === "a") {
            Aa += arr[i];
        }

        if (arr[i] === "E" || arr[i] === "e") {
            Ee += arr[i];
        }

        if (arr[i] === "I" || arr[i] === "i") {
            Ii += arr[i];
        }

        if (arr[i] === "O" || arr[i] === "o") {
            Oo += arr[i];
        }

        if (arr[i] === "U" || arr[i] === "u") {
            Uu += arr[i];
        }
    }
    return "Aa的个数是:" + Aa.length + "\nEe的个数是:" + Ee.length + "\nIi的个数是:" + Ii.length + "\nOo的个数是:" + Oo.length + "\nUu的个数是:" + Uu.length;
}

console.log(vowel("UuIiOOoEeeEAaaA"));