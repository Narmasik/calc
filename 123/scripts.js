const formTipCalculatorEl = document.querySelector(".formTipCalculator");
const amountOnAccountEl = document.querySelector(".amountOnAccount");
const serviceQualityEl = document.querySelector(".serviceQuality");
const qtyPeopleEl = document.querySelector(".qtyPeople");
const commonTipEl = document.querySelector(".commonTip");
const countTipPerPersonEl = document.querySelector(".countTipPerPerson");

const submitForm = (event) => {
  event.preventDefault();

  const amountOnAccountValue = Number
  const commonTip = (serviceQualityValue * amountOnAccountValue) / 100;
  const countTipPerPerson = commonTip / qtyPeopleValue;
  console.log(commonTip);
  console.log(qtyPeopleEl);

  commonTipEl.textContent = commonTip;
  countTipPerPersonEl.textContent = countTipPerPerson;
};

formTipCalculatorEl.addEventListener("submit", submitForm);