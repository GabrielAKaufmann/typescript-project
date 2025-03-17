class Funcionario {
    nome: string;
    salario: number;
    cargo: string;
  
    constructor(nome: string, salario: number, cargo: string) {
      this.nome = nome;
      this.salario = salario;
      this.cargo = cargo;
    }
  
    calcularVencimentos(): number {
      return this.salario;
    }
  }
  
  class FuncionarioEfetivo extends Funcionario {
    bonusAnual: number;
  
    constructor(
      nome: string,
      salario: number,
      cargo: string,
      bonusAnual: number
    ) {
      super(nome, salario, cargo);
      this.bonusAnual = bonusAnual;
    }
  
    calcularVencimentos(): number {
      return this.salario + this.bonusAnual;
    }
  }
  
  class FuncionarioTerceirizado extends Funcionario {
    custoPorProjeto: number;
  
    constructor(
      nome: string,
      salario: number,
      cargo: string,
      custoPorProjeto: number
    ) {
      super(nome, salario, cargo);
      this.custoPorProjeto = custoPorProjeto;
    }
  
    calcularVencimentos(): number {
      return this.salario + this.custoPorProjeto;
    }
  }
  
  const funcionarioEfetivo = new FuncionarioEfetivo(
    "Carlos Silva",
    5000,
    "Desenvolvedor",
    2000
  );
  const funcionarioTerceirizado = new FuncionarioTerceirizado(
    "Ana Costa",
    4000,
    "Consultora",
    1500
  );
  
  console.log(
    `${funcionarioEfetivo.nome} - Vencimentos: R$${funcionarioEfetivo
      .calcularVencimentos()
      .toFixed(2)}`
  );
  console.log(
    `${funcionarioTerceirizado.nome} - Vencimentos: R$${funcionarioTerceirizado
      .calcularVencimentos()
      .toFixed(2)}`
  );