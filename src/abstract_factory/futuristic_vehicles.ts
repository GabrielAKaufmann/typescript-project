abstract class Vehicle {
    constructor(
        public name: string,
        public propulsion: string,
        public controlSystem: string
    ) {}

    abstract displayInfo(): void;
}

class LandVehicle extends Vehicle {
    displayInfo(): void {
        console.log(`🚗 ${this.name} - Propulsão: ${this.propulsion}, Controle: ${this.controlSystem}`);
    }
}

class SpaceVehicle extends Vehicle {
    displayInfo(): void {
        console.log(`🚀 ${this.name} - Propulsão: ${this.propulsion}, Controle: ${this.controlSystem}`);
    }
}

// Criando veículos terrestres
const flyingCar = new LandVehicle("Carro Voador", "Motor a Jato", "Inteligência Artificial");
const autonomousBike = new LandVehicle("Moto Autônoma", "Elétrico", "Controle Manual");

// Criando veículos espaciais
const spaceship = new SpaceVehicle("Nave Espacial", "Plasma", "Inteligência Artificial");
const roboticExplorer = new SpaceVehicle("Explorador Robótico", "Íons", "Controle Remoto");

// Exibindo informações dos veículos
flyingCar.displayInfo();
autonomousBike.displayInfo();
spaceship.displayInfo();
roboticExplorer.displayInfo();
