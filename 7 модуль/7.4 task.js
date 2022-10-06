//1.Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//2.Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//4.Создайте экземпляры каждого прибора.
//5.Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

function ElectricalAppliance (name, power) {
    this.power = power;
    this.name = name;
    this.isPlugged = false;
}
  
//Метод определяет прибор включенный в розетку  
ElectricalAppliance.prototype.plugIn = function () {
    console.log(`${this.name} is plugged!`);
    this.isPlugged = true;
}
  
//Прибор выключенный из розетки
ElectricalAppliance.prototype.unplug = function () {
    console.log(`${this.name} is unplugged!`);
    this.isPlugged = false;
}

//Прибор №1
function LightSource (name, brand, power, form) {
    this.form = form;
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPlugged = true;
}

LightSource.prototype = new ElectricalAppliance()

//Прибор №2
function Computer (name, brand, power, weight) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.weight = weight;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

//экземпляр Прибора №1
const lamp = new LightSource ("Lamp", "Lightstar", 7, "round")

//экземпляр Прибора №2
const homeСomputer = new Computer("Home PC", "Irbis", 450, "5 kg")

//Отключить первый прибор
lamp.unplug();

//включить второй прибор
homeСomputer.plugIn();

//выводим результат
console.log(lamp)
console.log(homeСomputer)