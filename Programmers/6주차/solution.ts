// 문제 : 완주하지 못한 선수
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant: string[], completion: string[]): string {
  const countMap: Map<string, number> = new Map();

  participant.forEach((name) => {
    const count = countMap.get(name) || 0;
    countMap.set(name, count + 1);
  });

  completion.forEach((name) => {
    const count = countMap.get(name) || 0;
    countMap.set(name, count - 1);
  });

  for (const [name, count] of countMap) {
    if (count > 0) {
      return name;
    }
    ``;
  }

  return "";
}

// 타임 아웃
// function wrongSolution(participant:string[], completion:string[]):string {
//   completion.forEach(ele => {
//       const idx = participant.indexOf(ele)
//       participant.splice(idx,1)
//   })

//   return participant[0]
// }
