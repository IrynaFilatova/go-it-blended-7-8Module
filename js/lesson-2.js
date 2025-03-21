// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const container = document.querySelector(".numberContainer");
const boxes = [];

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("number");
  box.textContent = randomNumber();
  boxes.push(box);
  if (box.textContent % 2 === 0) {
    box.classList.add("even");
  } else {
    box.classList.add("odd");
  }
}
container.append(...boxes);
