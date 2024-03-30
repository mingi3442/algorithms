// 문제: 폰켓몬
// 문제 링크: https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums: number[]) {
  const flag = nums.length / 2;
  const temp: number[] = [];
  nums.forEach((ele) => {
    if (!temp.includes(ele)) {
      temp.push(ele);
    }
  });
  return flag > temp.length ? temp.length : flag;
}
