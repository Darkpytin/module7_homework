//Написать, функцию, которая принимает в качестве аргумента объект и выводит 
//в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.

const user = {
    city: "Piter",
    ownCity: "Moscow",
}
  
const student = Object.create(user);
  student.name = "Dmitrii";
  student.surname = "Butin";
  student.age = 31;
  
function OnlyOwnKeys(obj) {
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
          console.log(key + ": " + obj[key]);
      }   
    }
}
  
OnlyOwnKeys(student);