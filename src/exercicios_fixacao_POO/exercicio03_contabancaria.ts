// Exercicio 03 - Classe ContaBancaria
class ContaBancaria {
    constructor(private numero: number, private saldo: number) {}

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}

const conta = new ContaBancaria(123, 1000);
conta.depositar(500);
conta.sacar(200);
conta.consultarSaldo();
