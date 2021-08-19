function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  answer = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (answer > arr[i + 1]) {
      answer = arr[i + 1];
    }
  }
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
