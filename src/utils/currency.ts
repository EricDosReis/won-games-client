const formatCurrency = (value: number | bigint): string =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export { formatCurrency };
