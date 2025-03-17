
// Classe base Conta
class Conta {
    numero: string;
    saldo: number;
  
    constructor(numero: string, saldo: number) {
      this.numero = numero;
      this.saldo = saldo;
    }
  
    // Método para realizar o saque, que será sobrescrito nas subclasses
    saque(valor: number): boolean {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return true;
      }
      console.log("Saldo insuficiente.");
      return false;
    }
  
    // Método para realizar o depósito
    deposito(valor: number): void {
      this.saldo += valor;
    }
  
    // Método para exibir o saldo
    exibirSaldo(): number {
      return this.saldo;
    }
  }
  
  // Classe ContaCorrente
  class ContaCorrente extends Conta {
    chequeEspecial: number; // Limite do cheque especial
  
    constructor(numero: string, saldo: number, chequeEspecial: number) {
      super(numero, saldo);
      this.chequeEspecial = chequeEspecial;
    }
  
    // Sobrescreve o método saque para considerar o cheque especial
    saque(valor: number): boolean {
      if (valor <= this.saldo + this.chequeEspecial) {
        this.saldo -= valor;
        return true;
      }
      console.log("Saldo e cheque especial insuficientes.");
      return false;
    }
  }
  
  // Classe ContaPoupanca
  class ContaPoupanca extends Conta {
    taxaJuros: number; // Percentual de juros mensal
  
    constructor(numero: string, saldo: number, taxaJuros: number) {
      super(numero, saldo);
      this.taxaJuros = taxaJuros;
    }
  
    // Método para acumular juros no saldo
    acumularJuros(): void {
      this.saldo += this.saldo * (this.taxaJuros / 100);
    }
  }
  
  // Criando instâncias de contas
  const contaCorrente = new ContaCorrente("1234", 1000, 500); // 1000 de saldo, 500 de cheque especial
  const contaPoupanca = new ContaPoupanca("5678", 2000, 1.5); // 2000 de saldo, 1.5% de juros mensal
  
  // Realizando depósitos e saques
  contaCorrente.deposito(500);
  console.log(
    `Saldo da Conta Corrente após depósito: R$${contaCorrente.exibirSaldo()}`
  );
  
  contaCorrente.saque(1300); // Saque que usa cheque especial
  console.log(
    `Saldo da Conta Corrente após saque: R$${contaCorrente.exibirSaldo()}`
  );
  
  contaPoupanca.acumularJuros(); // Acumula juros
  console.log(
    `Saldo da Conta Poupança após acumular juros: R$${contaPoupanca.exibirSaldo()}`
  );
  