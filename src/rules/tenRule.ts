import { splitValue } from './utils/splitValue'

export function tenRule(value: number) {
  const { integer, range, roundedInteger } = splitValue(value)
  const firstCondition = value <= 50.9 && range >= 1 && range >= 0.99
  const secondCondition = range >= 3 && range <= 6.99
  const thirdCondition = range >= 7 && range <= 9.99

  if (firstCondition || secondCondition) return Number(integer + '.90')
  if (thirdCondition) return Number(roundedInteger + 10 + '.90')

  return Number(roundedInteger + '.90')
}
