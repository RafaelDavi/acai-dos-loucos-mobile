import { reactive } from 'vue';

export const store = reactive({
  carrinho: [],
  pedidos: [],
  nextOrderId: 1,
  cpf: null,
  nome: '',
  endereco: '',

  logar(cpfinfo){
    this.cpf = cpfinfo;
  },

  logarPessoa(info){
    this.nome = info;
  },

  logarEndereco(info){
    this.endereco = info;
  },

  pontos(cpf) {
    // Filtra os pedidos pelo CPF fornecido
    const pedidosDoCpf = this.pedidos.filter(pedido => pedido.cpf === cpf);
    
    // Verifica se há pedidos para o CPF fornecido
    if (pedidosDoCpf.length === 0) {
      return 0;
    }

    // Encontra o pedido com o maior ID
    const pedidoMaisAtual = pedidosDoCpf.reduce((maxPedido, pedidoAtual) => {
      return pedidoAtual.id > maxPedido.id ? pedidoAtual : maxPedido;
    });

    // Calcula e retorna a pontuação
    const total = pedidoMaisAtual.total;
    return parseFloat((total / 10).toFixed(2));
  },
  
  adicionarItem(item) {
    this.carrinho.push(item);
  },

  limparCarrinho() {
    this.carrinho.length = 0;
  },

  get total() {
    return this.carrinho.reduce((acc, item) => acc + item.valor, 0).toFixed(2);
  },

  removerItem(item) {
    if (!item || !item.id) {
      console.error('Item inválido ou sem ID:', item);
      return;
    }
    const index = this.carrinho.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
    }
  },

  adicionarPedido(pedido) {
    pedido.id = this.nextOrderId++;
    this.pedidos.push(pedido);
  }

});
