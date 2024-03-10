// 문제 : 기능개발
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42586

function solution1(progresses: number[], speeds: number[]): number[] {
  var answer: number[] = [];
  let daysToComplete: number[] = [];
  let featureCount: number = 1;
  for (const idx in progresses) {
    let temp = true;
    let count = 0;
    while (temp) {
      progresses[idx] += speeds[idx];
      count += 1;
      if (progresses[idx] >= 100) {
        daysToComplete.push(count);
        temp = false;
      }
    }
  }
  let daysToDeploy = daysToComplete[0];

  for (let i = 1; daysToComplete.length > i; i++) {
    if (daysToComplete[i] <= daysToDeploy) {
      featureCount++;
    } else {
      answer.push(featureCount);
      daysToDeploy = daysToComplete[i];
      featureCount = 1;
    }
  }
  answer.push(featureCount);
  return answer;
}
