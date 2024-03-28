//1. Найти по id, используя getElementById, элемент с id равным "super_link" и
//вывести этот элемент в консоль.
const superEl = document.getElementById("super_link");
console.log(superEl);

//2. Внутри всех элементов на странице,
//которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardEl = document.querySelectorAll(".card-link");
console.log(cardEl);
cardEl.forEach((element) => {
  element.innerHTML = "ссылка";
});

//3. Найти все элементы на странице с классом "card-link",
// которые лежат в элементе с классом "card-body" и
//вывести полученную коллекцию в консоль.
const cardBodyEl = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyEl);

//4. Найти первый попавшийся элемент на странице
//у которого есть атрибут data-number со значением 50
//и вывести его в консоль.
const dataNumEl = document.querySelector('[data-number = "50"]');
console.log(dataNumEl);

//5. Выведите содержимое тега title в консоль.
console.log(document.title);

//7. Создайте тег `p`, запишите внутри него текст "Привет"
//и добавьте созданный тег в начало элемента, который имеет класс "card".
const elemP = document.createElement("p");
elemP.innerHTML = "Привет";
document.querySelector(".card").prepend(elemP);

//8. Удалите тег h6 на странице.
const elemH6 = document.querySelector("h6");
elemH6.remove();
