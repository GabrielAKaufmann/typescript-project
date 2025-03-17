// Exercício 08 - Sistema de Pagamentos
interface MetodoPagamento {
    pagar(valor: number): void;
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
    }
}