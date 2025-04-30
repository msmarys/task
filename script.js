// бабуля
let total = 0;
const annualGift = 1000;
const rate = 0.06;
const years = 16;

for (let i = 0; i < years; i++) {
  const remainingYears = years - i;
  total += annualGift * Math.pow(1 + rate, remainingYears);
}

console.log(total.toFixed(4));

// вклад
let X = parseFloat(prompt("Введите сумму вклада:"));
let Y = parseFloat(prompt("Введите процентную ставку:"));
let Z = parseInt(prompt("Введите срок вклада в годах:"));

Y = Y / 100;
let S = X * Math.pow(1 + Y, Z);

console.log(
  `Итоговая сумма вклада через ${Z} лет составит: ${S.toFixed(2)} ₽.`
);
