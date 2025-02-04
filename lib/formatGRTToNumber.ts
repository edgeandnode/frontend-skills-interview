import { formatUnits } from 'viem'

export function formatGRTToNumber(value: bigint) {
  return parseFloat(formatUnits(value, 18))
}
