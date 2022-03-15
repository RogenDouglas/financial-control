export function convertCurrencyInBRL(amount: number) {
  const amountFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return amountFormated;
}
