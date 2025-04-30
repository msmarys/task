// бабуля
let initialAge = 5;
let finalAge = 20;
let yearlyGift = 1000;
let interestRate = 0.06;
let totalMoney = 0;

for (let age = initialAge; age < finalAge; age++) {
  totalMoney += yearlyGift;
  totalMoney *= 1 + interestRate;
}

console.log(`Сумма на счету к 20 годам: ${totalMoney.toFixed(2)} ₽.`);

// вклад
let X = parseFloat(prompt("Введите сумму вклада:"));
let Y = parseFloat(prompt("Введите процентную ставку:"));
let Z = parseInt(prompt("Введите срок вклада в годах:"));

Y = Y / 100;
let S = X * Math.pow(1 + Y, Z);

console.log(
  `Итоговая сумма вклада через ${Z} лет составит: ${S.toFixed(2)} ₽.`
);
