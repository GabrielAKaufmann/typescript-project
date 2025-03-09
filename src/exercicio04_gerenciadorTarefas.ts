// Exercício 04 - Gerenciador de Tarefas
class Tarefa {
    constructor(private descricao: string, private concluida: boolean = false) {}

    marcarConcluida(): void {
        this.concluida = true;
    }

    exibirDetalhes(): void {
        console.log(`Tarefa: ${this.descricao} | Concluída: ${this.concluida ? "Sim" : "Não"}`);
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
    }

    marcarConcluida(index: number): void {
        if (this.tarefas[index]) {
            this.tarefas[index].marcarConcluida();
        }
    }

    listarTarefas(): void {
        this.tarefas.forEach(tarefa => tarefa.exibirDetalhes());
    }
}