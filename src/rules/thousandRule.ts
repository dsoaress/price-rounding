import { splitValue } from './utils/splitValue'

export function thousandRule(value: number) {
  const { integer, range, roundedInteger } = splitValue(value)
  const firstCondition = range >= 30 && range <= 969.99
  const secondCondition = range <= 970 || range <= 29.99

  if (firstCondition) return Number(integer + '.90')
  if (secondCondition) return Number(roundedInteger - 1 + '.90')

  return Number(roundedInteger + '.90')
}
