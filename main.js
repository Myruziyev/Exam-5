// Examen JavaScript Amaliy savollar

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:
// alert(5 % 2);

// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// javob:
// let randomNumber = Math.random() * 10;
// alert(Math.round(randomNumber));

// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob:
// let number = 12.51;
// alert(Math.floor(number));

// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// javob:
// let word = "MARS IT SCHOOL";
// alert(word.length);

// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// javob:

// let word = "MARS IT SCHOOL";
// for (index = 0; index < 10; index++) {
//     console.log(word);
// }



// let word = "MARS IT SCHOOL";

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// javob:
// let harflar = [
//   "a",
//   "b",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "x",
//   "y",
//   "z",
// ];
// console.log(
//   harflar[11] +
//     harflar[19] +
//     harflar[6] +
//     harflar[0] +
//     harflar[11] +
//     harflar[11] +
//     harflar[0] +
//     harflar[2] +
//     harflar[22] +
//     harflar[19] +
//     harflar[17] +
//     harflar[19] +
//     harflar[4]
// );
// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// javob:
// let yosh = prompt("Yoshingizni kiriting");
// if (yosh > 18) {
//   console.log("Siz balag'ot yoshiga yetgansiz");
// } else if (yosh < 18) {
//   console.log("Siz balog'at yoshiga yetmagansiz");
// } else if (yosh == 18) {
//   console.log("balog'at yoshi muborak");
// }

// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// javob:
// let ism = prompt("Ismingizni kiriting");
// let teskari = ism.split("").reverse().join("");
// console.log(teskari);

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring

// Ввести в промпт свое имя и возраст и вывести его в DOM с заданным стилем

// javob:

// let ism = prompt("Ismingizni kiriting");
// let yosh = prompt("Yoshingizni kiriting");
// let div = document.createElement("div");
// div.innerHTML = `Ismingiz: ${ism} Yoshingiz: ${yosh}`;
// div.style.color = "red";
// div.style.fontSize = "20px";
// document.body.appendChild(div);

// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

// javob:
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let juft = [];
// for (sonlar of sonlar) {
//   if (sonlar % 2 == 0) {
//     juft.push(sonlar);
//   }
// }o
// console.log(juft);
