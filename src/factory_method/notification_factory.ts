import { Notification } from "./Notification";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";

export class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
                throw new Error('Tipo de notificação inválido.');
        }
    }
}

interface Notification {
    send(message: string): void;
}

// Implementações dos tipos de notificações
class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Enviando e-mail: ${message}`);
    }
}

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

// Factory Method para criar a instância correta
class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
                throw new Error('Tipo de notificação inválido.');
        }
    }
}

// Exemplo de uso
const notificationType = 'email'; // Pode ser 'email' ou 'sms'
const notification = NotificationFactory.createNotification(notificationType);
notification.send("Sua conta foi ativada com sucesso!");
