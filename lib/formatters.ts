export const grtFormatOptions: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'GRT',
  currencyDisplay: 'name',
  maximumFractionDigits: 0,
  roundingMode: 'floor',
}

export const grtFormat = new Intl.NumberFormat('en-US', grtFormatOptions)

export const compactGRTFormat = new Intl.NumberFormat('en-US', {
  ...grtFormatOptions,
  notation: 'compact',
  compactDisplay: 'short',
  roundingMode: 'ceil',
})

export const dateFormat = new Intl.DateTimeFormat('en-US')

export const percentageFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
})

export const decimalFormat = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 0,
})
