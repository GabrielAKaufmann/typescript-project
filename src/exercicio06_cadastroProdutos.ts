// Exercício 06 - Cadastro de Produtos
class Produto {
    constructor(private nome: string, private preco: number, private quantidadeEmEstoque: number) {}

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }
}
