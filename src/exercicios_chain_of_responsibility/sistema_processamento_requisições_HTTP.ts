// Estrutura básica da requisição
type HttpRequest = {
    headers: Record<string, string>;
    body?: string;
    url: string;
    method: string;
  };
  
  // Interface para os manipuladores
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: HttpRequest): void;
  }
  
  // Implementação base
  abstract class BaseHandler implements Handler {
    protected nextHandler?: Handler;
  
    setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    handle(request: HttpRequest): void {
      if (this.process(request)) {
        if (this.nextHandler) {
          this.nextHandler.handle(request);
        } else {
          console.log("✅ Requisição processada com sucesso.");
        }
      }
    }
  
    protected abstract process(request: HttpRequest): boolean;
  }
  
  // Manipulador de Autenticação
  class AuthHandler extends BaseHandler {
    protected process(request: HttpRequest): boolean {
      if (request.headers["Authorization"] === "Bearer token123") {
        console.log("🔐 Autenticação bem-sucedida.");
        return true;
      }
      console.log("❌ Falha na autenticação.");
      return false;
    }
  }
  
  // Manipulador de Cache
  class CacheHandler extends BaseHandler {
    private cache: Set<string> = new Set(["/cached"]);
  
    protected process(request: HttpRequest): boolean {
      if (this.cache.has(request.url)) {
        console.log("📦 Requisição servida via cache.");
        return false; // interrompe, pois já está em cache
      }
      console.log("📡 Requisição não está em cache, prosseguindo.");
      return true;
    }
  }
  
  // Manipulador de Compressão
  class CompressionHandler extends BaseHandler {
    protected process(request: HttpRequest): boolean {
      console.log("📦 Compressão aplicada à resposta.");
      return true;
    }
  }
  
  // Manipulador de Logging
  class LoggingHandler extends BaseHandler {
    protected process(request: HttpRequest): boolean {
      console.log(`📝 Log - ${request.method} ${request.url}`);
      return true;
    }
  }
  
  // Criação da cadeia
  const auth = new AuthHandler();
  const cache = new CacheHandler();
  const compression = new CompressionHandler();
  const logging = new LoggingHandler();
  
  auth.setNext(cache).setNext(compression).setNext(logging);
  
  // Testes
  const validRequest: HttpRequest = {
    headers: { Authorization: "Bearer token123" },
    method: "GET",
    url: "/api/data",
  };
  
  const cachedRequest: HttpRequest = {
    headers: { Authorization: "Bearer token123" },
    method: "GET",
    url: "/cached",
  };
  
  const invalidRequest: HttpRequest = {
    headers: {},
    method: "GET",
    url: "/api/data",
  };
  
  console.log("\n🧪 Requisição válida:");
  auth.handle(validRequest);
  
  console.log("\n🧪 Requisição em cache:");
  auth.handle(cachedRequest);
  
  console.log("\n🧪 Requisição sem autenticação:");
  auth.handle(invalidRequest);
  