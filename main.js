function converter(sum, currency = "rub", targetCurrency) {
  switch (true) {
    case targetCurrency === "usd":
      return rateConverterUSD(sum);
    case targetCurrency === "euro":
      return rateConverterEuro(sum);
    case targetCurrency === "ils":
      return rateConverterILS(sum);
    default:
      return null;
  }
}
console.log(converter(3000, "rub", "ils"));

function rateConverterUSD(sum) {
  return sum * 0.01;
}

function rateConverterILS(sum) {
  return sum * 0.04;
}

function rateConverterEuro(sum) {
  return sum * 0.009;
}
