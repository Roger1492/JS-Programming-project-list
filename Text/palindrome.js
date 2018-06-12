/**
 * @description 判断是否为回文——判断用户输入的字符串是否为回文。回文是指正反拼写形式都是一样的词，譬如“racecar”。
 * @param {String}
 * @return {Boolean}
 */

function palindrome(str) {

    // 如果是true说明是字符串长度是偶数个，false则是奇数个。
    let isEven = str.length % 2 == 0;
    let len = str.length - 1;
    let front = "";
    let back = "";
    if (isEven === true) {
        for (let i = 0; i < len; i++ , len--) {
            front += str[i];
            back += str[len];
        }
        if (front === back) {
            return "偶数:是回文数";
        } else {
            return "偶数:不是回文数";
        }

    } else {
        let nL = Math.floor(len / 2);

        for (let i = 0; i < nL; i++ , len--) {
            front += str[i];
            back += str[len];
        }
        if (front === back) {
            return "奇数:是回文数";
        } else {
            return "奇数:不是回文数";
        }
    }

}

console.log(palindrome("qwerrgtewq"));