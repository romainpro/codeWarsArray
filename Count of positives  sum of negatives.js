function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let arrayPositif = [];

  let arrayNegatif = [];

  let arrayFinal = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      arrayPositif.push(input[i]);
    } else {
      arrayNegatif.push(input[i]);
    }
  }

  arrayNegatif = arrayNegatif.reduce((a, b) => a + b, 0);

  arrayFinal.push(arrayPositif.length);

  arrayFinal.push(arrayNegatif);

  return arrayFinal;
}
