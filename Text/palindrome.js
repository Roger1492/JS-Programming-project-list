/**
 * @description 判断是否为回文——判断用户输入的字符串是否为回文。回文是指正反拼写形式都是一样的词，譬如“racecar”。
 */

function palindrome(str) {

    // 如果是true说明是字符串长度是偶数个，false则是奇数个。
    let isEven = str.length % 2 == 0;
    let len = str.length - 1;
    if (isEven === true) {
        for (let i = 0; i < len; i++ , len--) {
            // console.log(str[i] + " - " + str[len]);
            if (str[i] === str[len]) {
                return "这是偶数回文数";
            } else {
                return "这不是偶数回文数";
            }
        }

    } else {
        let nL = Math.floor(len / 2);

        for (let i = 0; i < nL; i++ , len--) {
            console.log(str[i] + " - " + str[len]);
            if (str[i] !== str[len]) {
                return "这不是奇数回文数";
            } else {
                return "这是奇数回文数";
            }
        }
    }

}

console.log(palindrome("hielleh"));