export default function currencyMask(value: number) {
  const currencyNumber = Number(value.toString().replace(/\D/g, '')) / 10 || 0;
  const currency = currencyNumber
    .toFixed(2)
    .replace('.', ',')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');

  return currency;
}
