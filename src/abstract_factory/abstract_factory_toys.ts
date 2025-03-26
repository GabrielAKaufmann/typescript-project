// Definição da interface para os brinquedos
interface Toy {
    play(): void;
}

// Implementações concretas dos brinquedos
class PlasticCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de plástico!");
    }
}

class WoodenCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de madeira!");
    }
}

class PlasticDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de plástico!");
    }
}

class WoodenDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de madeira!");
    }
}

// Definição da Abstract Factory
interface ToyFactory {
    createCar(): Toy;
    createDoll(): Toy;
}

// Implementação das fábricas concretas
class PlasticToyFactory implements ToyFactory {
    createCar(): Toy {
        return new PlasticCar();
    }
    createDoll(): Toy {
        return new PlasticDoll();
    }
}

class WoodenToyFactory implements ToyFactory {
    createCar(): Toy {
        return new WoodenCar();
    }
    createDoll(): Toy {
        return new WoodenDoll();
    }
}

// Código cliente
type MaterialType = "plastic" | "wooden";

function getFactory(material: MaterialType): ToyFactory {
    if (material === "plastic") {
        return new PlasticToyFactory();
    } else {
        return new WoodenToyFactory();
    }
}

const plasticFactory = getFactory("plastic");
const woodenFactory = getFactory("wooden");

const plasticCar = plasticFactory.createCar();
const plasticDoll = plasticFactory.createDoll();
const woodenCar = woodenFactory.createCar();
const woodenDoll = woodenFactory.createDoll();

plasticCar.play();
plasticDoll.play();
woodenCar.play();
woodenDoll.play();
