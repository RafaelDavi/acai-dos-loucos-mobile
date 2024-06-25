<template>
  <q-layout view="hHh lpR fFf">
    <q-footer style="background-color: rgb(255, 0, 0,0.85);">
      <q-toolbar style="display: flex; justify-content: space-evenly;">
        <q-btn flat label="HOME" icon="home" color="white" style="font-size: 20px;" to="/Home"/>
        <q-btn flat label="CONTA" color="white" style="font-size: 20px;"/>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'MainConsulta'
});

</script>
