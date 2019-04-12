/**
 * 是否为空
 * @param value
 */
export const isEmpty = (value: any): boolean => {
  return value === undefined || value === null;
}

/**
 * 计算坐标轴最大刻度
 * @param max
 * @param count
 */
export const getMaxTickValue = (max: number, count = 10): number => {
  let step = Math.pow(10, Math.floor(Math.log(max / count) / Math.LN10)), err = count / max * step;
  if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
  let lastValue = 0;
  const result = [];
  result.push(lastValue);
  while (lastValue < max) {
    lastValue = lastValue + step;
    result.push(lastValue);
  }
  return result.length ? result[result.length - 1] : 0;
}
