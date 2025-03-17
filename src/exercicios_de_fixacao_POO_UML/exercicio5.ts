
// Classe base Publicacao
class Publicacao {
    titulo: string;
    autor: string;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    // Método para exibir resumo, que será sobrescrito nas subclasses
    exibirResumo(): string {
      return `${this.titulo} - Autor: ${this.autor}`;
    }
  }
  
  // Classe Artigo
  class Artigo extends Publicacao {
    numeroDePalavras: number;
  
    constructor(titulo: string, autor: string, numeroDePalavras: number) {
      super(titulo, autor);
      this.numeroDePalavras = numeroDePalavras;
    }
  
    // Sobrescreve o método exibirResumo para incluir o número de palavras
    exibirResumo(): string {
      return `${this.titulo} - Autor: ${this.autor} - Número de Palavras: ${this.numeroDePalavras}`;
    }
  }
  
  // Classe Video
  class Video extends Publicacao {
    duracao: number;
  
    constructor(titulo: string, autor: string, duracao: number) {
      super(titulo, autor);
      this.duracao = duracao;
    }
  
    // Sobrescreve o método exibirResumo para incluir a duração do vídeo
    exibirResumo(): string {
      return `${this.titulo} - Autor: ${this.autor} - Duração: ${this.duracao} minutos`;
    }
  }
  
  // Criando instâncias de publicações
  const artigo = new Artigo("A Evolução da Programação", "João Silva", 1200);
  const video = new Video("Introdução ao TypeScript", "Maria Oliveira", 45);
  
  // Exibindo resumos
  console.log(artigo.exibirResumo());
  console.log(video.exibirResumo());
  