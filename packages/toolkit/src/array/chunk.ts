


export const chunk = <T>(arr: readonly T[], size: number): T[][] => {

  if(Number.isInteger(size) || size <= 0) {
    throw new Error('Size must be an integer greater than zero')
  }

  const chunkLen = Math.ceil(arr.length / size);
  const chunkResult: T[][] = Array(chunkLen);

  for (let i = 0; i < chunkLen; i++) {
    const s = i * size;
    const e = s + size;

    chunkResult[i] = arr.slice(s, e)
  }

  return chunkResult;
}