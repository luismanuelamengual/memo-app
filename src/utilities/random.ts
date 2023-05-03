export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomElements<T>(array: Array<T>, count: number): Array<T> {
  const result: Array<T> = [];
  const ramainingArray = [...array];
  while (count-- > 0) {
    const randomIndex = generateRandomNumber(0, ramainingArray.length - 1);
    result.push(ramainingArray[randomIndex]);
    ramainingArray.splice(randomIndex, 1);
  }
  return result;
}