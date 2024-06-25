<template>
  <q-header class="qheader" elevated style="background-color: #6F36A8DD;">
    <!-- <img src="../assets/imagens/loucos-frangos.png" class="img">
    <img src="../assets/imagens/pfp.png" class="pfpimg"> -->
    <p style="font-size: 20px; margin-left: 10%; border: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">
      Dados
    </p>
  </q-header>

  <q-page>
    <div style="margin-top: 10%; margin-bottom: 10%">
      <div class="buttons" style="margin-bottom: 30px;">
        Nome:
        <div style="background-color: #6F36A8DD; color: white; padding: 10px;">{{ store.nome }}</div>
      </div>

      <div class="buttons" style="margin-bottom: 30px;">
        CPF:
        <div style="background-color: #6F36A8DD; color: white; padding: 10px;">{{ formatCPF(store.cpf) }}</div>
      </div>

      <div class="buttons" style="margin-bottom: 30px;">
        Endereço:
        <div style="background-color: #6F36A8DD; color: white; padding: 10px;">{{ store.endereco }}</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { store } from '../store'; // Importar Script STORE.js

function formatCPF(cpf) {
  cpf = cpf.toString();
  // Formata o CPF
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
</script>

<style scoped>
.qheader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
