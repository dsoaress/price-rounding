import { decimalRule } from './decimalRule'
import { hundredRule } from './hundredRule'
import { tenRule } from './tenRule'
import { thousandRule } from './thousandRule'
import { unitRule } from './unitRule'

export function rules(value: number) {
  if (value >= 3.1 && value <= 5.29) return decimalRule(value)
  if (value >= 5.3 && value <= 18.9) return unitRule(value)
  if (value >= 19 && value <= 102.99) return tenRule(value)
  if (value >= 103 && value <= 1004.99) return hundredRule(value)
  if (value >= 1005 && value <= 95990) return thousandRule(value)

  return value
}
