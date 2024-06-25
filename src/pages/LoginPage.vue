<template>
  <q-header class="qheader" elevated style="background-color:#6F36A8DD">
    <q-toolbar-title style="text-align: center;">Tela Login</q-toolbar-title>
  </q-header>
  <img
    alt="frango logo"
    src="src/assets/Home2.jpeg"
    style="width: 80%;margin-left: 10%;"
  />
  <q-page style=" margin-top: 0px;color: white;">
    <q-card style="background-color: #6F36A8DD; color: white;">
      <q-card-section color="white">
        <q-form @submit.prevent="addPessoa" color="white">
          <q-input color="white" v-model="newPessoa.cpf" label="CPF" required />
          <q-btn label="ACESSAR" type="submit" style="background-color: #6BC87F;" class="q-mt-md"/>
        </q-form>
        <div v-if="errorMessage" class="text-negative q-mt-md">{{ errorMessage }}</div>
      </q-card-section>
    </q-card>
  </q-page>
  <q-footer style="background-color: #6F36A8DD;">
    <q-toolbar style="display: flex; justify-content: space-evenly;">
    </q-toolbar>
  </q-footer>
</template>

<script>

import { store } from '../store'; // Importar Script STORE.js
export default {
  name: 'LoginPage',
  data() {
    return {
      pessoas: [],
      newPessoa: {
        cpf: '',
        nome: '',
        endereco: ''
      },
      errorMessage: ''
    };
  },
  created() {
    fetch('/pessoa.json')
      .then(response => response.json())
      .then(data => {
        this.pessoas = data;
      });
  },
  methods: {
    addPessoa() {
      const existingPessoa = this.pessoas.find(pessoa => pessoa.CPF == this.newPessoa.cpf);
      if (existingPessoa) {
        store.logar(existingPessoa.CPF);
        store.logarPessoa(existingPessoa.nome);
        store.logarEndereco(existingPessoa.endereco);
        this.$router.push('/Home');  // Redireciona para a página Home
      } else {
        store.logar(this.newPessoa.cpf);
        this.$router.push('/Registro');  // Redireciona para a página de Registro
      }
    }
  }
};
</script>
