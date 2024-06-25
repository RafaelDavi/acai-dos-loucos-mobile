<template>
  <q-header class="qheader" elevated style="background-color: #6F36A8DD;">

    <!-- <img src="../assets/imagens/loucos-frangos.png" class="img">

    <img src="../assets/imagens/pfp.png" class="pfpimg"> -->

    <p style="font-size: 20px;margin-left: 10%;text-shadow: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">{{ store.nome }}</p>
  </q-header>

  <q-page>
    <ul v-if="store.pedidos && store.pedidos.length > 0">
      <li v-for="item in store.pedidos" :key="item.id" style="list-style-type: none; display: flex; align-items: center; margin-top: 10px;">
        Pedido {{ item.id }} - R$ {{ item.total }}
      </li>
    </ul>
    <p v-else style="text-align: center; margin-top: 20px;">Nenhum pedido encontrado.</p>
  </q-page>

</template>

<script setup>
import { store } from '../store'; // Importar Script STORE.js


defineOptions({
  name: 'PagamentoPage',
});
</script>
