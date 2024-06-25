<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer style="background-color: #6F36A8DD">
      <q-toolbar style="display: flex; justify-content: space-evenly;">
        <q-btn flat label="HOME" icon="home" color="white" style="font-size: 20px;" to="/Home"/>
        <q-btn flat label="OPÇÕES" color="white " style="font-size: 20px;" to="/Option"/>
        <q-btn-dropdown flat color="white" icon="more_horiz" size="15px">
          <q-list>
            <q-item clickable v-close-popup; style="background-color: white;" >
              <q-item-section> 
                <q-btn flat label="CARDÁPIO" style="font-size: 20px; background: fixed;color:#6F36A8;" to="/Cardapio"/>
                <q-btn flat label="CARRINHO"  style="font-size: 20px; background: fixed;color:#6F36A8;" to="/Carrinho"/>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>
<script setup>

defineOptions({
  name: 'MainConfg'
});
</script>
