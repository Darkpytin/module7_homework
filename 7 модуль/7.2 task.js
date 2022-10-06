//Написать функцию, которая принимает в качестве аргументов
//строку и объект, а затем проверяет есть ли у переданного объекта 
//свойство с данным именем. Функция должна возвращать true или false.

const user = {
    name: "Dmitrii",
    age: 31,
    city: "Piter",
    ownCity: "Moscow",
}

function StringAndObj(str, obj) {
  return (str in obj);
}

const result = StringAndObj("ownCity", user);
console.log(result);