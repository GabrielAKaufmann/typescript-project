// -----------------------------
// Sistema A - Original da sua empresa
// -----------------------------
class FuncionarioSistemaA {
    nomeCompleto: string;
    cargo: string;
    salarioMensal: number;
  
    constructor(nomeCompleto: string, cargo: string, salarioMensal: number) {
      this.nomeCompleto = nomeCompleto;
      this.cargo = cargo;
      this.salarioMensal = salarioMensal;
    }
  
    getResumo(): string {
      return `${this.nomeCompleto} atua como ${this.cargo} com salário de R$${this.salarioMensal}`;
    }
  }
  
  // -----------------------------
  // Sistema B - Da empresa adquirida
  // -----------------------------
  class EmpregadoSistemaB {
    primeiroNome: string;
    ultimoNome: string;
    nivel: string;
    salarioAnual: number;
  
    constructor(primeiroNome: string, ultimoNome: string, nivel: string, salarioAnual: number) {
      this.primeiroNome = primeiroNome;
      this.ultimoNome = ultimoNome;
      this.nivel = nivel;
      this.salarioAnual = salarioAnual;
    }
  
    info(): string {
      return `${this.primeiroNome} ${this.ultimoNome}, nível ${this.nivel}, salário anual R$${this.salarioAnual}`;
    }
  }
  
  // -----------------------------
  // Adaptador - Faz o Sistema A "enxergar" os dados do B
  // -----------------------------
  class AdaptadorFuncionario extends FuncionarioSistemaA {
    private empregadoB: EmpregadoSistemaB;
  
    constructor(empregadoB: EmpregadoSistemaB) {
      const nomeCompleto = `${empregadoB.primeiroNome} ${empregadoB.ultimoNome}`;
      const cargo = AdaptadorFuncionario.mapearNivel(empregadoB.nivel);
      const salarioMensal = AdaptadorFuncionario.converterSalario(empregadoB.salarioAnual);
      super(nomeCompleto, cargo, salarioMensal);
      this.empregadoB = empregadoB;
    }
  
    // Mapeamento de nível para cargo
    private static mapearNivel(nivel: string): string {
      const mapa: { [key: string]: string } = {
        'Jr': 'Analista Júnior',
        'Pl': 'Analista Pleno',
        'Sr': 'Analista Sênior',
        'MG': 'Gerente',
      };
      return mapa[nivel] || 'Cargo Desconhecido';
    }
  
    // Conversão de salário anual para mensal
    private static converterSalario(salarioAnual: number): number {
      return Math.round(salarioAnual / 12);
    }
  }
  
  // -----------------------------
  // Exemplo de uso
  // -----------------------------
  const empregadoB = new EmpregadoSistemaB("Ana", "Silva", "Sr", 120000);
  const adaptado = new AdaptadorFuncionario(empregadoB);
  
  console.log(adaptado.getResumo());
  // Output: Ana Silva atua como Analista Sênior com salário de R$10000
  