// Exercicio 01 - Classe Retangulo
class Retangulo {
    constructor(private largura: number, private altura: number) {}

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirArea(): void {
        console.log(`A área do retângulo é: ${this.calcularArea()}`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibirArea();