const nums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const quantity = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

function getDecimals(dec, ones) {
  if (dec >= 2) {
    const decimals = +(dec + '0');

    return `${quantity[decimals]} ${ones > 0 ? nums[ones] : ''}`.trim();
  }

  if (dec !== 0) {
    const decimals = '' + dec + ones;

    return quantity[+decimals];
  }

  return `${ones > 0 ? nums[ones] : ''}`.trim();
}

module.exports = function toReadable(number) {
  const str = String(number)
    .split('')
    .map((el) => Number(el));
  const [hund, dec, ones] = str;

  if (str.length === 3) {
    return `${nums[hund]} hundred ${getDecimals(dec, ones)}`.trim();
  }

  if (str.length === 2) {
    return getDecimals(hund, dec);
  }

  if (str.length === 1) {
    return nums[hund];
  }
};
