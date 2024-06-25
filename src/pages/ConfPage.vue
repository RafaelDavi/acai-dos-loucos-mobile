<template>
  <q-header class="qheader" elevated style="background-color: #6F36A8DD;">

    <!-- <img src="../assets/imagens/loucos-frangos.png" class="img">

    <img src="../assets/imagens/pfp.png" class="pfpimg"> -->

    <p style="font-size: 20px;margin-left: 10%;text-shadow: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">{{ store.nome }}</p>
  </q-header>

  <q-page>
    <div style="margin-top: 10%; margin-bottom: 10%">
      <div class="corpo">
        <div class="wrapper">
          <div class="buttons">
            <p> <router-link to="/UserPage"><q-btn class="button-color">DADOS DA CONTA</q-btn></router-link> </p>
          </div>

          <div class="buttons">
            <p> <router-link to="/Pagamento"><q-btn class="button-color">PAGAMENTOS</q-btn></router-link> </p>
          </div>

          <a href="https://loucosporfrangomobile.netlify.app/#/" class="buttons">
            Venha conferir nosso app do
            <p> <q-btn class="button-color" style="background-color: yellow; color: red">LOUCOS POR FRANGO ORIGINAL</q-btn> </p>
          </a>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script setup>
import { store } from '../store'; // Importar Script STORE.js

defineOptions({
  name: 'ConfPage'
});
</script>
