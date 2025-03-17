// Classe base Veiculo
class Veiculo {
    modelo: string;
    capacidadePassageiros: number;
  
    constructor(modelo: string, capacidadePassageiros: number) {
      this.modelo = modelo;
      this.capacidadePassageiros = capacidadePassageiros;
    }
  
    // Método de cálculo de consumo de combustível (será sobrescrito nas subclasses)
    calcularConsumo(distancia: number): number {
      return 0;
    }
  }
  
  // Classe Ônibus
  class Onibus extends Veiculo {
    consumoPorKm: number;
  
    constructor(
      modelo: string,
      capacidadePassageiros: number,
      consumoPorKm: number
    ) {
      super(modelo, capacidadePassageiros);
      this.consumoPorKm = consumoPorKm;
    }
  
    // Método para calcular o consumo de combustível baseado na distância
    calcularConsumo(distancia: number): number {
      return distancia * this.consumoPorKm;
    }
  }
  
  // Classe Táxi
  class Taxi extends Veiculo {
    consumoPorPassageiroPorKm: number;
  
    constructor(
      modelo: string,
      capacidadePassageiros: number,
      consumoPorPassageiroPorKm: number
    ) {
      super(modelo, capacidadePassageiros);
      this.consumoPorPassageiroPorKm = consumoPorPassageiroPorKm;
    }
  
    // Método para calcular o consumo de combustível baseado na distância e no número de passageiros
    calcularConsumo(distancia: number): number {
      return (
        distancia * this.capacidadePassageiros * this.consumoPorPassageiroPorKm
      );
    }
  }
  
  // Criando instâncias de veículos
  const onibus = new Onibus("Bus Modelo A", 50, 0.1); // Consome 0.1 litros por km
  const taxi = new Taxi("Taxi Modelo B", 4, 0.05); // Consome 0.05 litros por passageiro por km
  
  // Calculando o consumo de combustível para cada veículo
  const distancia = 100; // Distância de 100 km
  
  console.log(
    `Consumo do Ônibus para ${distancia} km: ${onibus.calcularConsumo(
      distancia
    )} litros`
  );
  console.log(
    `Consumo do Táxi para ${distancia} km: ${taxi.calcularConsumo(
      distancia
    )} litros`
  );