abstract class Approver {
    protected nextApprover?: Approver;
  
    constructor(protected name: string) {}
  
    setNext(approver: Approver): Approver {
      this.nextApprover = approver;
      return approver;
    }
  
    approveExpense(amount: number): void {
      if (this.canApprove(amount)) {
        console.log(`${this.name} aprovou a despesa de R$ ${amount.toFixed(2)}`);
      } else if (this.nextApprover) {
        this.nextApprover.approveExpense(amount);
      } else {
        console.log(`Despesa de R$ ${amount.toFixed(2)} não pôde ser aprovada.`);
      }
    }
  
    protected abstract canApprove(amount: number): boolean;
  }
  
  class Manager extends Approver {
    protected canApprove(amount: number): boolean {
      return amount <= 1000;
    }
  }
  
  class Director extends Approver {
    protected canApprove(amount: number): boolean {
      return amount <= 5000;
    }
  }
  
  class VicePresident extends Approver {
    protected canApprove(amount: number): boolean {
      return amount <= 20000;
    }
  }
  
  class President extends Approver {
    protected canApprove(amount: number): boolean {
      return true; // pode aprovar qualquer valor
    }
  }
  
  // Uso
  const gerente = new Manager("Gerente");
  const diretor = new Director("Diretor");
  const vicePresidente = new VicePresident("Vice-presidente");
  const presidente = new President("Presidente");
  
  gerente.setNext(diretor).setNext(vicePresidente).setNext(presidente);
  
  // Testes
  const despesas = [500, 3000, 12000, 50000];
  
  despesas.forEach(valor => {
    console.log(`\nSolicitando aprovação para R$ ${valor.toFixed(2)}:`);
    gerente.approveExpense(valor);
  });
  