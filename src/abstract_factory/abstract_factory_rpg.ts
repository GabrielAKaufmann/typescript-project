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

// Abstract Factory
interface VehicleFactory {
    createVehicle(name: string, propulsion: string, controlSystem: string): Vehicle;
}

class LandVehicleFactory implements VehicleFactory {
    createVehicle(name: string, propulsion: string, controlSystem: string): Vehicle {
        return new LandVehicle(name, propulsion, controlSystem);
    }
}

class SpaceVehicleFactory implements VehicleFactory {
    createVehicle(name: string, propulsion: string, controlSystem: string): Vehicle {
        return new SpaceVehicle(name, propulsion, controlSystem);
    }
}

// Função para configurar um veículo futurista
function configureVehicle(factory: VehicleFactory, name: string, propulsion: string, controlSystem: string): Vehicle {
    return factory.createVehicle(name, propulsion, controlSystem);
}

// Criando fábricas concretas
const landFactory = new LandVehicleFactory();
const spaceFactory = new SpaceVehicleFactory();

// Criando veículos usando a fábrica correta
const flyingCar = configureVehicle(landFactory, "Carro Voador", "Motor a Jato", "Inteligência Artificial");
const autonomousBike = configureVehicle(landFactory, "Moto Autônoma", "Elétrico", "Controle Manual");
const spaceship = configureVehicle(spaceFactory, "Nave Espacial", "Plasma", "Inteligência Artificial");
const roboticExplorer = configureVehicle(spaceFactory, "Explorador Robótico", "Íons", "Controle Remoto");

// Exibindo informações dos veículos
flyingCar.displayInfo();
autonomousBike.displayInfo();
spaceship.displayInfo();
roboticExplorer.displayInfo();
