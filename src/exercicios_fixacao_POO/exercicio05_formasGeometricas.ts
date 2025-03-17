// Exercício 05 - Formas Geométricas
class Circulo {
    constructor(private raio: number) {}

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    exibirDetalhes(): void {
        console.log(`Círculo | Raio: ${this.raio} | Área: ${this.calcularArea()} | Perímetro: ${this.calcularPerimetro()}`);
    }
}

const circulo = new Circulo(5);
circulo.exibirDetalhes();
