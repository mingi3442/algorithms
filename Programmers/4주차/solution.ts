// 문제 : 주식가격
// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices: number[]): number[] {
  const answer: number[] = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      // 가격이 떨어지지 않은 기간을 카운트
      answer[i]++;
      // 현재 가격이 다음 가격보다 크면, 가격이 떨어짐
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }

  return answer;
}

// 스택 풀이
function solutionWithStack(prices: number[]): number[] {
  // 각 가격별로 가격이 떨어지지 않은 기간을 저장할 배열 초기화
  const answer: number[] = new Array(prices.length).fill(0);
  // 인덱스를 저장할 스택
  const stack: number[] = [];

  // 모든 가격을 순회
  prices.forEach((price, index) => {
    // 스택이 비어있지 않고 현재 가격이 스택의 top에 있는 가격보다 낮은 경우
    while (stack.length > 0 && prices[stack[stack.length - 1]] > price) {
      // 스택에서 가격이 떨어진 시점의 인덱스를 꺼냄
      const topIndex = stack.pop()!;
      // 가격이 떨어진 시점부터 현재까지의 기간을 계산하여 저장
      answer[topIndex] = index - topIndex;
    }
    // 현재 가격의 인덱스를 스택에 추가
    stack.push(index);
  });

  // 스택에 남아 있는 인덱스 처리 (가격이 끝까지 떨어지지 않은 경우)
  while (stack.length > 0) {
    const topIndex = stack.pop()!;
    answer[topIndex] = prices.length - 1 - topIndex;
  }

  return answer;
}
