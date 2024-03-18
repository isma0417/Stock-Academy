// Найти кнопку и модальное окно
const button = document.getElementById("showFormButton");
const modal = document.getElementById("myModal");

// Найдите элемент <span>, который закрывает модальное окно
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальное окно
button.addEventListener('click', () => {
  modal.style.display = "block";
});

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.addEventListener('click', () => {
  modal.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального окна, закройте его
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Отправка данных формы
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Добавьте здесь логику для отправки данных формы на сервер
  // Например, можно использовать fetch API или AJAX запрос
  alert("Данные успешно отправлены!");
  modal.style.display = "none"; // Закрываем модальное окно после отправки данных
});
