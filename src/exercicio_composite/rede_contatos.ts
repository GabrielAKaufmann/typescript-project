// Componente base
abstract class Contato {
    constructor(public nome: string) {}
  
    abstract exibir(nivel?: number): void;
    abstract buscar(nome: string): Contato | null;
  }
  
  // Classe Pessoa (Folha)
  class Pessoa extends Contato {
    exibir(nivel: number = 0): void {
      console.log("  ".repeat(nivel) + `Pessoa: ${this.nome}`);
    }
  
    buscar(nome: string): Contato | null {
      return this.nome === nome ? this : null;
    }
  }
  
  // Classe Grupo (Composite)
  class Grupo extends Contato {
    private membros: Contato[] = [];
  
    adicionar(contato: Contato): void {
      this.membros.push(contato);
    }
  
    exibir(nivel: number = 0): void {
      console.log("  ".repeat(nivel) + `Grupo: ${this.nome}`);
      for (const membro of this.membros) {
        membro.exibir(nivel + 1);
      }
    }
  
    buscar(nome: string): Contato | null {
      if (this.nome === nome) return this;
      for (const membro of this.membros) {
        const encontrado = membro.buscar(nome);
        if (encontrado) return encontrado;
      }
      return null;
    }
  }
  
  // ----------------------
  // Exemplo de uso
  // ----------------------
  
  // Criando pessoas
  const ana = new Pessoa("Ana");
  const bruno = new Pessoa("Bruno");
  const carla = new Pessoa("Carla");
  const davi = new Pessoa("Davi");
  
  // Criando grupos e subgrupos
  const familia = new Grupo("Família");
  familia.adicionar(ana);
  familia.adicionar(bruno);
  
  const primos = new Grupo("Primos");
  primos.adicionar(davi);
  familia.adicionar(primos);
  
  const colegas = new Grupo("Colegas de Trabalho");
  colegas.adicionar(carla);
  
  // Grupo principal
  const rede = new Grupo("Minha Rede de Contatos");
  rede.adicionar(familia);
  rede.adicionar(colegas);
  
  // Exibir estrutura da rede
  console.log("📂 Estrutura da Rede de Contatos:\n");
  rede.exibir();
  
  // Buscar por nome
  const busca = "Davi";
  const resultado = rede.buscar(busca);
  
  console.log(`\n🔍 Resultado da busca por "${busca}":`);
  if (resultado) {
    resultado.exibir();
  } else {
    console.log("Contato não encontrado.");
  }
  