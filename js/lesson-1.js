// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector("body");
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataList = document.querrySelectorAll("[data-topic]");
const dataList = document.querySelectorAll("li[data-topic]");
console.log(dataList);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataEl = dataList[0];
console.log(firstDataEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataEl = dataList[dataList.length - 1];
console.log(lastDataEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleEl = document.querySelector("#title");
const titleSiblinng = titleEl.nextElementSibling;
console.log(titleSiblinng);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titles = document.querySelectorAll("h3");
console.log(titles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// titles.forEach((title) => title.classList.add("active"));
// console.log(titles);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// console.log(firstDataEl.dataset.topic);
// console.log(firstDataEl.getAttribute("data-topic"));

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// firstDataEl.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const paragraphEl = firstDataEl.querySelector("p");
// dataList.forEach((item) => {
//   if (item.dataset.topic === "navigation") {
//     paragraphEl.textContent = `Я змінив тут текст!`;
//   }
// });
// paragraphEl.textContent = `Я змінив тут текст!`;

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const foundItem = [...dataList].find(
//   (item) => item.dataset.topic === currentTopic
// );
// console.log(foundItem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// foundItem.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const titleCompleted = document.querySelector(".completed");
// console.log(titleCompleted);
const titlesCompleted = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
// console.log(titlesCompleted);
let titleCompl = null;
titlesCompleted.forEach((title) => {
  if (title.classList.contains("completed")) {
    titleCompl = title;
  }
});
console.log(titleCompl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed";
titleCompl.classList.remove("completed");

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому
//  наступний текст: "Об'єктна модель документа (Document Object Model)"
const paragraph = document.createElement("p");
paragraph.textContent = "Об'єктна модель документа (Document Object Model)";
title.append(paragraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це -
// "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і
// помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру
// зробити всю важку роботу". тобто, потрібно створити елемент LI
//  потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement("li");
const newTitle = document.createElement("h3");
const newLiParagraph = document.createElement("p");
newTitle.textContent = "Властивість innerHTML";
newLiParagraph.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.append(newTitle, newLiParagraph);
list.append(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newItem = `<li>
  <h3>"Властивість innerHTML"</h3>
  <p>
    {" "}
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
    використовувати рядки з тегами і дозволити браузеру зробити всю важку
    роботу"
  </p>
</li>`;
list.insertAdjacentHTML("beforeend", newItem);
// 20 - очисти список
list.innerHTML = "";
