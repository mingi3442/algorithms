// 문제 : 올바른 괄호
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12909
function solution2(s: string): boolean {
  let temp = 0;

  s.split("").forEach((s) => {
    if (temp < 0) return false;
    if (s === "(") {
      temp += 1;
    } else if (s === ")") {
      temp -= 1;
    }
  });

  return temp === 0 ? true : false;
}
