export default function currencyMask(value: number) {
  const currencyNumber = value / 100 || 0;
  const currency = currencyNumber
    .toFixed(2)
    .replace('.', ',')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');

  return currency;
}
