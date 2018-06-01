/**
 * Created by Administrator on 2018/6/1.
 */
/**给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 */

/**本题属于动态规划
 * s[i] === '('时入栈index， s[i]===')'出栈，
 * 每次出栈的时，i减去栈顶元素的值即为当前的括号长度，
 * 如果栈为空，则用一个start变量记录这个栈的起始位置，这样仍然可以得出当前位置的括号长度，
 * 然后每次比较最大的括号长度即可
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s) return 0;

  let start = 0;
  let result = 0;
  let stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(') {

      stack.push(i);

    } else {
      if (!stack.length) {
        start = i + 1;
      } else {
        stack.pop();

        if (!stack.length) {
          result = Math.max(result, i - start + 1);
        } else {
          result = Math.max(result, i - stack[stack.length - 1])
        }
      }

    }
  }

  return result;
};

/**非动态规划版本
 * 将整个s进行上述的入栈出栈操作，剩余项即为不符合项
 * 将空缺的位置索引进行相减，其中的最大值即为题目所求
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function(s) {
  let stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      
    }
  }
};

// var s = ')())()((()()('
var s = '(()'
console.log(longestValidParentheses(s));