<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated style="background-color: #6F36A8DD">
        <q-toolbar>
          <q-toolbar-title>
            <p style="font-size: 19px; margin-top: 15px;">LOUCOS POR FRANGO</p>
          </q-toolbar-title>

          <q-btn-dropdown flat color="white" icon="person" size="15px">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

      <q-page style="background-color: #6BC87F" padding>
        <div>
          <div class="text-h5" style="display: flex; justify-content: center; border-bottom: 2px solid black;">
            PRODUTOS SELECIONADOS
          </div>
          <div>
            <ul style="padding-top:5px; padding-bottom: 15px;border-bottom: 2px solid black; ">
              <li v-for="item in store.carrinho" :key="item.id" style="list-style-type: none;display: flex; align-items: center; margin-top: 10px;  ">
                <img :src="item.imagem" style="width: 24%; margin-right: 10px;"> {{ item.nome }} - R$ {{ item.valor }} <br/> acompanhamentos {{  item.acompanhamentos.length }}
                <q-btn size="10px" dense class="q-ml-md" round icon="remove" color="red" @click="removerCarrinho(item)" />
              </li>
              <li style="list-style-type: none;display: flex; align-items: center; margin-top: 3rem;">
                <q-btn label="ADICIONAR MAIS ITENS"
                  style="background-color: white; color: #6F36A8; font-size: 15px; float: right;"
                to="/Cardapio" />
              </li>
            </ul>
            
          </div>
          <div class="total" >
            <p style="width: 100%;;">SUBTOTAL R$ {{ store.total }}</p>
            <p style="width: 100%;;">DESCONTO PONTOS {{ store.pontos(store.cpf) }}</p>
            <p style="width: 100%;;">TOTAL R$ {{ store.total - store.pontos(store.cpf) }}</p>
          </div>
          <div class="buttons" style="display: flex; justify-content: space-between; margin-top: 20px;">
            <q-btn label="FINALIZAR PEDIDO" color="green" style="float: right;" @click="finalizarPedido" />
          </div>
        </div>
        <q-dialog v-model="removeDialog">
          <q-card  style="background-color: #6F36A8;">
            <q-card-section class="row items-center">
              <q-icon name="close" size="2em" color="red" />
              <span class="q-ml-sm">Produto Removido!</span>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="red" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store'; // Importar Script STORE.js

defineOptions({
  name: 'CarrinhoPage'
});

const removeDialog = ref(false);

const removerCarrinho = (produto) => {
  store.removerItem(produto);
  removeDialog.value = true;
};

const finalizarPedido = () => {
  const novoPedido = {
    items: [...store.carrinho],
    total: store.total,
    cpf: store.cpf,
    data: new Date()
  };

  store.adicionarPedido(novoPedido);
  store.limparCarrinho();

  console.log('Pedido finalizado:', novoPedido);
};
</script>
