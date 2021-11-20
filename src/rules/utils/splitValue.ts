export function splitValue(value: number) {
  const normalizedValue = (Math.round(Number(value) * 100) / 100).toFixed(2)
  const [integer, decimal] = normalizedValue.split('.')
  const range = Number(integer.toString().slice(1) + '.' + decimal)
  const roundedInteger = Math.ceil(Number(integer) / 10) * 10 - 1
  const roundedDecimal = Math.ceil(Number(decimal) / 10) * 10 - 1

  return {
    integer: Number(integer),
    decimal: Number(decimal),
    range,
    roundedInteger,
    roundedDecimal
  }
}
