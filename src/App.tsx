import { useEffect, useState } from 'react'

import { CurrencyInput } from './components/CurrencyInput'
import { rules } from './rules'
import { formatValue } from './utils/formatValue'

export function App() {
  const [value, setValue] = useState(3.11)
  const [roundedValue, setRoundedValue] = useState(value)

  useEffect(() => {
    const roundedValue = rules(value)
    setRoundedValue(roundedValue)
  }, [value])

  return (
    <div>
      <CurrencyInput value={value} onChange={setValue} />

      <p>
        <strong>Valor arredondado</strong>: {formatValue(roundedValue)}
      </p>
    </div>
  )
}
