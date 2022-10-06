//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor (name, power) {
        this.power = power;
        this.name = name;
        this.isPlugged = false;
    }
//Метод определяет прибор включенный в розетку 
    plugIn() {
        console.log(`${this.name} is plugged!`);
        this.isPlugged = true;
    }
//Прибор выключенный из розетки
    unplug() {
        console.log(`${this.name} is unplugged!`);
        this.isPlugged = false;
    }
}

//Прибор №1
class LightSource extends ElectricalAppliance {
    constructor (name, brand, power, form) {
        super(name,power)
        this.form = form;
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.isPlugged = true;
    }
}
const lamp = new LightSource ("Lamp", "Lightstar", 7, "round")

//Прибор №2
class Computer extends ElectricalAppliance {
    constructor (name, brand, power, weight){
        super(name,power)
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.weight = weight;
        this.isPlugged = false;
    }
}
const homeСomputer = new Computer("Home PC", "Irbis", 450, "5 kg")

//Выключаем Прибор №1 и смотрим результаты
lamp.unplug()
console.log(lamp)

//Включаем Прибор №2 и смотрим результаты
homeСomputer.plugIn()
console.log(homeСomputer)