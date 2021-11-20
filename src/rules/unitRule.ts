import { splitValue } from './utils/splitValue'

export function unitRule(value: number) {
  const { integer, decimal, roundedDecimal } = splitValue(value)
  const firstCondition = decimal >= 30 && decimal <= 69
  const secondCondition = decimal >= 70

  if (firstCondition) return Number(integer + '.' + roundedDecimal)
  if (secondCondition) return Number(integer + '.90')

  return Number(integer - 1 + '.90')
}
