export function splitCardNumber(number: number) {
  const string = number.toString();
  let numbers: number[] = [];
  let n = 1;
  let word = "";
  for (const digit of string) {
    word += digit;
    if (n === 4) {
      numbers.push(parseInt(word));
      word = "";
      n = 1;
    } else {
      n++;
    }
  }

  return numbers;
}
