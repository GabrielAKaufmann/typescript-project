class Item {
    nome: string;
    preco: number;
  
    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class Pedido {
    numero: number;
    itens: Item[];
  
    constructor(numero: number, itens: Item[]) {
      this.numero = numero;
      this.itens = itens;
    }
  
    calcularTotal(): number {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  }
  
  class PedidoPresencial extends Pedido {
    constructor(numero: number, itens: Item[]) {
      super(numero, itens);
    }
  
    calcularTotal(): number {
      return super.calcularTotal();
    }
  }
  
  class PedidoDelivery extends Pedido {
    custoEntrega: number;
  
    constructor(numero: number, itens: Item[], custoEntrega: number) {
      super(numero, itens);
      this.custoEntrega = custoEntrega;
    }
  
    calcularTotal(): number {
      return super.calcularTotal() + this.custoEntrega;
    }
  }
  
  const item1 = new Item("Hambúrguer", 15.0);
  const item2 = new Item("Batata Frita", 7.0);
  
  const pedidoPresencial = new PedidoPresencial(1, [item1, item2]);
  const pedidoDelivery = new PedidoDelivery(2, [item1, item2], 5.0);
  
  console.log(
    `Total Pedido Presencial: R$${pedidoPresencial.calcularTotal().toFixed(2)}`
  );
  console.log(
    `Total Pedido Delivery: R$${pedidoDelivery.calcularTotal().toFixed(2)}`
  );