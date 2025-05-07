// Interface para validadores
interface Validator {
    setNext(validator: Validator): Validator;
    validate(data: Record<string, string>): void;
  }
  
  // Classe base abstrata
  abstract class BaseValidator implements Validator {
    protected nextValidator?: Validator;
  
    setNext(validator: Validator): Validator {
      this.nextValidator = validator;
      return validator;
    }
  
    validate(data: Record<string, string>): void {
      if (this.check(data)) {
        if (this.nextValidator) {
          this.nextValidator.validate(data);
        } else {
          console.log("✔️ Todos os dados foram validados com sucesso!");
        }
      }
    }
  
    protected abstract check(data: Record<string, string>): boolean;
  }
  
  // Validador de email
  class EmailValidator extends BaseValidator {
    protected check(data: Record<string, string>): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email || !emailRegex.test(data.email)) {
        console.log("❌ Email inválido.");
        return false;
      }
      return true;
    }
  }
  
  // Validador de senha
  class PasswordValidator extends BaseValidator {
    protected check(data: Record<string, string>): boolean {
      if (!data.password || data.password.length < 8) {
        console.log("❌ A senha deve ter pelo menos 8 caracteres.");
        return false;
      }
      return true;
    }
  }
  
  // Validador de nome (opcional)
  class NameValidator extends BaseValidator {
    protected check(data: Record<string, string>): boolean {
      if (!data.name || data.name.trim().length === 0) {
        console.log("❌ O nome não pode estar vazio.");
        return false;
      }
      return true;
    }
  }
  
  // Uso
  const emailValidator = new EmailValidator();
  const passwordValidator = new PasswordValidator();
  const nameValidator = new NameValidator();
  
  emailValidator.setNext(passwordValidator).setNext(nameValidator);
  
  // Testes
  const form1 = {
    email: "usuario@exemplo.com",
    password: "senha123",
    name: "João",
  };
  
  const form2 = {
    email: "usuario_invalido",
    password: "123",
    name: "",
  };
  
  console.log("\n🔎 Validação do formulário 1:");
  emailValidator.validate(form1);
  
  console.log("\n🔎 Validação do formulário 2:");
  emailValidator.validate(form2);
  