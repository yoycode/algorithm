function solution(s) {
  let answer;
  let idx;

  for (let x of s) {
    if (s.length % 2 == 0) {
      idx = Math.floor(s.length / 2)
      answer = s[idx - 1] + s[idx]
    } else {
      idx = Math.ceil(s.length / 2)
      answer = s[idx - 1]
    }
  }

  return answer;
}
console.log(solution("study"));
