// Definição da interface Payment
interface Payment {
    processPayment(amount: number): void;
}

// Implementações dos métodos de pagamento
class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado com Cartão de Crédito.`);
    }
}

class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado via PayPal.`);
    }
}

class BoletoPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Boleto gerado para pagamento de R$${amount.toFixed(2)}.`);
    }
}

// Factory Method para criar a instância correta
class PaymentFactory {
    static createPayment(method: string): Payment {
        switch (method) {
            case 'creditCard':
                return new CreditCardPayment();
            case 'paypal':
                return new PayPalPayment();
            case 'boleto':
                return new BoletoPayment();
            default:
                throw new Error('Método de pagamento inválido.');
        }
    }
}

// Exemplo de uso
const paymentMethod = 'creditCard'; // Pode ser 'creditCard', 'paypal' ou 'boleto'
const payment = PaymentFactory.createPayment(paymentMethod);
payment.processPayment(150.75);
