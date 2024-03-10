// 문제 : 다리를 지나는 트럭
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42583
function solution2(bridge_length: number, weight: number, truck_weights: number[]) {
  const waitList = truck_weights.slice();
  let processList: [number, number][] = [];
  let finishList: [number, number][] = [];
  let answer: number = 0;
  let temp: number = 0;

  while (finishList.length !== truck_weights.length) {
    if (processList.length !== 0) {
      if (processList[0][1] === bridge_length) finishList.push(processList.shift()!);
      processList = processList.map((ele, idx) => {
        return [ele[0], ele[1] + 1];
      });
    }
    temp = processList?.map((ele) => ele[0]).reduce((acc, curr) => acc + curr, 0);
    if (waitList && weight >= temp + waitList[0]) {
      processList.push([waitList.shift()!, 1]);
    }
    answer += 1;
  }
  return answer;
}
