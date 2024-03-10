// 문제 : 같은 숫자는 싫어
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906
// 배열을 순회하면서 가장 마지막에 들어간 값이 현재 값과 같지 않으면 answer에 push
function solution1(arr: number[]) {
  var answer: number[] = [];
  for (const i of arr) {
    if (answer[answer.length - 1] !== i) answer.push(i);
  }

  return answer;
}
