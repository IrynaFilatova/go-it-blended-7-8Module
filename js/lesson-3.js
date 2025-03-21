// Form Events, Input, Focus, Blur and Submit.
const formEl = document.querySelector(".js-contact-form");
const inputEl = document.querySelector(".js-username-input");
const agreeCheckbox = document.querySelector(".js-policy-checkbox");
const submitBtn = document.querySelector(".js-contact-form-submit");

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// inputEl.addEventListener("input", (event) => {
//   if (inputEl.value.trim().length >= 6) {
//     inputEl.classList.add("success");
//     inputEl.classList.remove("error");
//   } else {
//     inputEl.classList.add("error");
//     inputEl.classList.remove("success");
//   }
// });

// inputEl.addEventListener("input", (event) => {
//   inputEl.classList.toggle("success", inputEl.value.length >= 6);
//   inputEl.classList.toggle("error", inputEl.value.length <= 6);
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// inputEl.addEventListener("focus", (event) => {
//   if (inputEl.value.trim() === "") {
//     inputEl.style.outline = "3px solid red";
//   } else {
//     inputEl.style.outline = "3px solid green";
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// inputEl.addEventListener("blur", () => {
//   if (inputEl.value.trim() === "") {
//     inputEl.style.outline = "3px solid red";
//   } else {
//     inputEl.style.outline = "3px solid lime";
//   }
// });
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне значення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.userName.value.trim();
  const check = event.target.elements.accept.checked;
  /*  можна дотати окремо змінну, куди ми запишемо шлях до value. Наприклад 
  const UserIn = formEl.elements.userName(class UserIn)
  const check = form.elements.accept.checked */
  console.log(inputValue, check);
  if (inputValue === "" || !check) {
    alert(`Fill all the fields`);
    return;
  }
  const userData = { userName: inputValue };
  console.log(userData);
  formEl.reset;
});
const checkSpan = document.querySelector(".js-username-output");
inputEl.addEventListener("input", () => {
  if (inputEl.value.trim() === "") {
    checkSpan.textContent = "Anonymous";
  } else {
    checkSpan.textContent = inputEl.value.trim();
  }
});
/* або частину коду можна виконати таким чином 
const inputEl = document.querySelector(".js-username-input");
const checkSpan = document.querySelector(".js-username-output");
inputEl.addEventListener("input", () => {
const userNme = inputEl.value.trim() || "Anonymous";
checkSpan.textContent = `Hello ${userNme}! Please agree to the privacy policy.`;
}); */
