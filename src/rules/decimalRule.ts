import { splitValue } from './utils/splitValue'

export function decimalRule(value: number) {
  const { integer, decimal, roundedDecimal } = splitValue(value)
  const firstCondition = decimal >= 30 && decimal <= 79
  const secondCondition = decimal >= 80

  if (firstCondition) return Number(integer + '.' + roundedDecimal)
  if (secondCondition) return Number(integer + '.99')

  return Number(integer - 1 + '.99')
}
