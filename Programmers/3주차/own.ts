// 문제 : 프로세스
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42587
function solution1(priorities: number[], location: number): number {
  // 프로세스와 그 위치를 튜플로 묶어서 큐에 저장
  let queue: [number, number][] = priorities.map((priority, index) => [priority, index]);
  let answer = 0;

  while (queue.length > 0) {
    let current = queue.shift()!; // 현재 프로세스를 큐에서 꺼냄
    // 현재 프로세스보다 우선순위가 높은 프로세스가 큐에 있는지 확인
    if (queue.some((process) => process[0] > current[0])) {
      queue.push(current); // 우선순위가 더 높은 프로세스가 있으면 현재 프로세스를 큐 끝에 다시 넣음
    } else {
      answer++; // 실행 순서 증가
      if (current[1] === location) {
        // 찾고자 하는 프로세스가 실행됐다면 반복 종료
        break;
      }
    }
  }

  return answer;
}
