/**
 * @description 逆转字符串——输入一个字符串，将其逆转并输出
 * @param {String}
 * @return {String}
 */

function rs(str) {
    let s = "";
    for (let i = str.length-1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}

console.log(rs("this is roger!"));