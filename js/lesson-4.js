// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const boxContainer = document.querySelector(".box");
const btnDecrease = document.querySelector(".js-decrease");
const btnIncrease = document.querySelector(".js-increase");
// Функція зменшення
btnDecrease.addEventListener("click", () => {
  let currentSize =
    parseInt(boxContainer.style.width) || boxContainer.offsetWidth;

  if (currentSize > 20) {
    // Щоб не йшло в нуль
    boxContainer.style.width = `${currentSize - 20}px`;
    boxContainer.style.height = `${currentSize - 20}px`;
  }
});

// Функція збільшення
btnIncrease.addEventListener("click", () => {
  let currentSize =
    parseInt(boxContainer.style.width) || boxContainer.offsetWidth;

  boxContainer.style.width = `${currentSize + 20}px`;
  boxContainer.style.height = `${currentSize + 20}px`;
});
