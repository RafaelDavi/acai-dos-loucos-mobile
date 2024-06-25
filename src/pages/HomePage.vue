<template>
  <q-layout view="hHh lpR fFf">
    <!-- Cabeçalho -->
    <q-header elevated style="background-color: #6F36A8DD">
      <q-toolbar>
        <img
          alt="frango logo"
          src="src/assets/Home2.jpeg"
          style="width: 50px; height: 50px;"
        />
        <q-toolbar-title>
          <p style="font-size: 13px; margin-top: 15px;">{{ store.nome }} Pontos:  {{ store.pontos(store.cpf) }}</p>
        </q-toolbar-title>

        <q-btn flat icon="person" size="18px" to="/"/>

      </q-toolbar>
    </q-header>

    
    <q-page class="flex flex-center" style="background-color: #6BC87F;">
      <div class="flex flex-center full-height column">
        <img
          alt="frango logo"
          src="../assets/home.jpg"
          style="margin-top:44px; width: 375px; height: 410px;"
        to="/Cardapio">
        <q-btn label="VENHA CONFERIR" rounded
          style="background-color: #6F36A8DD; color: white; width: 50%;; font-size: 15px; float: right; margin-right: 5%; margin-top: 15px;" to="/Cardapio"/>
        
      </div>
      <h1 style="font-size: 34px; margin-bottom: -38px;">HORÁRIOS</h1>
    </q-page>
    <q-page class="q-pa-md" style="background-color: #6F36A8DD">
      <q-table
        :rows="schedule"
        :columns="columns"
        row-key="day"
        flat
        rows-per-page-options="[]"
        :pagination.sync="pagination"
        hide-bottom
        class="q-ma-md"
        style="background-color: #FFF;"
      />
    </q-page>
  </q-layout>
</template>

<style scoped>
.full-height {
  height: 100vh; 
}
</style>

<script setup>
import { ref } from 'vue';
import { store } from '../store'; // Importar Script STORE.js


 const columns = [ 
  { name: 'day', align: 'left', label: 'Dia', field: 'day' },
  { name: 'morning', align: 'center', label: 'Horário', field: 'morning' }
];

const schedule = [
  { day: 'Segunda', morning: '15:00 - 23:00'},
  { day: 'Terça', morning: '11:00 - 23:00'},
  { day: 'Quarta', morning: '11:00 - 23:00'},
  { day: 'Quinta', morning: '11:00 - 23:00'},
  { day: 'Sexta', morning: '11:00 - 00:00'},
  { day: 'Sábado', morning: '11:00 - 23:30'},
  { day: 'Domingo', morning: 'FECHADO'}
];

const pagination = ref({
  rowsPerPage: 0, 
});

defineOptions({
  name: 'HomePage'
});
</script>
