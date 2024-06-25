<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated style="background-color: rgb(255, 0, 0, 0.85);">
        <q-toolbar style="display: flex; justify-content: space-evenly">
          <!--<img src="../assets/" alt=""> -->
          <q-toolbar-title>
            <p style="font-size: 15px;">LOUCOS POR FRANGO</p>
          </q-toolbar-title>
          <q-btn  flat icon="person" size="15px"/>

        </q-toolbar>
      </q-header>

      <q-page style="background-color: rgb(254, 220, 98);" padding>
        <q-card style="border-radius: 20px;">
          <div  style="display: flex; position: fixed; flex-direction: column; text-align: center; margin-top: 3rem; align-items: center; background-color: rgb(255, 0, 0, 0.95);">
            <H6 style="color: white; width: 60%; margin-top: 10px;">DIGITE SEU CPF PARA CONSULTAR SEUS PONTOS</H6>
            <h6 style="margin-top:-10px; font-size:30px;text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black;color: rgb(255, 199, 0);">CPF</h6>
            <q-input rounded outlined v-model="text" bg-color="white" color ="grey" style="width: 85%; margin-bottom: 1rem;" elevated/>
            <q-btn label="CONSULTAR" rounded
              style="background-color: rgb(255, 199, 0); color: rgb(141, 4, 4); width: 80%; font-size: 20px; float: right;margin-top: 3%; margin-bottom: 5%;" />

          </div>
        </q-card>
        
      </q-page>
    </q-page-container>

    
   
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { QPage, QCard, QBtn, QBadge, QDialog, QIcon, QHeader, QToolbar, QToolbarTitle, QLayout } from 'quasar';
import { store } from '../store'; // Importar a store global

defineOptions({
  name: 'ConsultaPage'
});



onMounted(() => {
  fetch('/produtos.json')
    .then(response => response.json())
    .then(data => {
      produtos.value = data;
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
});
</script>
