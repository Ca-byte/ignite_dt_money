export const dateFormatter = new Intl.DateTimeFormat('de-DE')

export const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})
