class Ninja {
    constructor (nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;  
    }
    sayName(){
        console.log(`El nombre de este gran Ninja es: ${this.nombre}`);
    }
    showStats(){
        console.log(`Ninja: ${this.nombre}, Salud Estado: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud += 10;
        console.log(`${this.nombre} Salud Estado Actual: ${ninja1.salud}`);
    }
    
}
const ninja1 = new Ninja("Hyabusa", 10, 3, 3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);


class Sensei extends Ninja {
    constructor (nombre, salud, velocidad, fuerza) {
        super (nombre, salud, velocidad, fuerza);
        this.sabiduria = 10; 
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    showStats(){
        console.log(`Sensei: ${this.nombre}, Salud Estado: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}, Sabiduria ${this.sabiduria}`);
    }
}

const superSensei = new Sensei("Master Splinter", 200, 10, 10);
superSensei.speakWisdom();
superSensei.showStats();








