import { splitValue } from './utils/splitValue'

export function hundredRule(value: number) {
  const { integer, range, roundedInteger } = splitValue(value)
  const firstCondition = range >= 5 && range <= 94.99
  const secondCondition = (range <= 95 && range >= 99.99) || range >= 5

  if (firstCondition) return Number(integer + '.90')
  if (secondCondition) return Number(roundedInteger + 10 + '.90')

  return Number(roundedInteger + '.90')
}
