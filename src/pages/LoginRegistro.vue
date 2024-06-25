<template>
  <q-header class="qheader" elevated style="background-color:#6F36A8DD">
    <q-toolbar-title style="text-align: center;">Tela Login</q-toolbar-title>
  </q-header>
  <q-page style="max-height: 987px; margin-top: 100px;color: white;">
    <q-card style="background-color: #6F36A8DD; color: white;">
      <q-card-section color="white">
        <q-form @submit.prevent="addPessoa" color="white">
          <q-input color="white" v-model="newPessoa.cpf" label="CPF" required />
          <q-input color="white" v-model="newPessoa.nome" label="Nome" required />
          <q-input color="white" v-model="newPessoa.endereco" label="Endereço" required />
          <q-btn label="ACESSAR" type="submit"  style="background-color: #6BC87F;" class="q-mt-md"/>
        </q-form>
        <div v-if="errorMessage" class="text-negative q-mt-md">{{ errorMessage }}</div>
      </q-card-section>
    </q-card>

  </q-page>
  <q-footer style="background-color: #6F36A8DD;">
    <q-toolbar style="display: flex; justify-content: space-evenly;">
      <!-- <router-link to="/Home"><q-btn flat label="HOME" icon="home" color="white"
          style="font-size: 20px;" /></router-link>
      <q-btn flat label="CONTA" color="white" style="font-size: 20px;" to="/Option"/> -->
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
        cpf: store.cpf,
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
      const existingPessoa = this.pessoas.find(pessoa => pessoa.cpf === this.newPessoa.cpf);
      if (existingPessoa) {
        this.errorMessage = 'CPF já cadastrado!';
      } else {
        store.logar(this.newPessoa.cpf);
        store.logarPessoa(this.newPessoa.nome);
        console.log(this.newPessoa);
        this.pessoas.push({ ...this.newPessoa });
        this.newPessoa = { cpf: '', nome: '', endereco: '' };
        this.errorMessage = '';
        this.$router.push('/Home');
      }
    }
  }
};


</script>
