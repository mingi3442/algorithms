// 문제 : K번째 수
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42748
function solution2(array: number[], commands: number[][]) {
  const answer = commands.map((temp) => {
    // array를 slice로 복사
    const arr = array.slice();
    // slice로 복사한 배열을 splice로 잘라서 정렬
    const spliceArr = arr.splice(temp[0] - 1, temp[1] - temp[0] + 1);
    // 오름차순 정렬
    spliceArr.sort((a, b) => {
      return a - b;
    });
    return spliceArr[temp[2] - 1];
  });
  return answer;
}
