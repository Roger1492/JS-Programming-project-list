/**
 * @description 拉丁猪文字游戏——这是一个英语语言游戏。基本规则是将一个英语单词的第一个辅音音素的字母移动到词尾并且加上后缀-ay（譬如“banana”会变成“anana-bay”）
 * @param {String}
 * @return {String}
 */

 function pig(str){
    let second = str[0];
    let first = str.substring(1,str.length);
    return first + "-" + second + "ay";
 }

 console.log(pig("Apple"));