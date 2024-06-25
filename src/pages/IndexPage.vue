<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated style="background-color: #6F36A8;">
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

          <q-btn flat icon="shopping_cart" size="15px" color="white" @click="toggleCart">
            <q-badge v-if="store.carrinho.length > 0" floating color="green" :content="store.carrinho.length">{{store.carrinho.length}}</q-badge>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page style="background-color: #6BC87F;" padding>
        <div v-for="produto in produtos" :key="produto.id" style="display:flex; margin-bottom: 15px;">
          <q-card class="my-card" flat bordered style="width: 50%; float: left;">
            <img :src="produto.imagem">
          </q-card>
          <q-card style="width: 50%; text-align: center; background-color: white;">
            <p
              style="width: 100%; font-size:18px; text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black; float: right; color: #6BC87F;">
              {{ produto.nome }}
            </p>
            <p
              style="width: 100%; font-size:18px; text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black; float: right; color: white;">
              R${{ produto.valor }}
            </p>
            <q-btn label="ADICIONAR"
              style="background-color: #6F36A8; color: white; width: 90%; font-size: 15px; float: right; margin-right: 5%; margin-top: 15px;"
              icon="shopping_cart" @click="acomplementoAoCarrinho(produto)" />
          </q-card>
        </div>
      </q-page>
    </q-page-container>

    <q-dialog v-model="cartDialog">
      <q-card style="background-color: #6F36A8;">
        <q-card-section>
          <div class="text-h6" style="color: white;">CARRINHO</div>
        </q-card-section>
        <q-card-section>
          <ul>
            <li v-for="item in store.carrinho" :key="item.id" style="list-style-type: none; color: #111;">
              {{ item.nome }} - R$ {{ item.valor }} <br/> acompanhamentos {{  item.acompanhamentos.length }}
              <q-btn size="10px" dense class="q-ml-md" round icon="remove" color="red" @click="removerCarrinho(item)"/> 
              </li>
          </ul>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Pagamento" style="background-color: #6BC87F; color: #222;" to="/Carrinho"/>
          <q-btn flat label="Fechar" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- alerta criado para remover o produto do carrinho-->
    <q-dialog v-model="removeDialog">
      <q-card  style="background-color: #6F36A8; color: #fff;">
        <q-card-section class="row items-center">
          <q-icon name="close" size="2em" color="red" />
          <span class="q-ml-sm">Produto Removido do carrinho!!</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  <!-- alerta criado para adicionar o produto do carrinho-->
    <q-dialog v-model="alertDialog">
      <q-card  style="background-color: #6F36A8; color: #fff;">
        <q-card-section class="row items-center">
          <q-icon name="check" size="2em" color="green" />
          <span class="q-ml-sm">Produto adicionado ao carrinho!</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="green" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  <q-dialog v-model="complementoDialog">
      <q-card  style="background-color: #6F36A8; color: #fff;">
        <q-card-section class="row items-center">
          <q-icon name="check" size="2em" color="green" />
          <span class="q-ml-sm">Acompanhamentos (Escolha 2 de 3)</span>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div v-for="acompanha in acompanhamentos" :key="acompanha.nome" @click="toggleAcompanhamento(acompanha)" class="col-4">
              <q-img :src="acompanha.imagem" :style="{border: acompanha.selected ? '2px solid green' : 'none'}" />
              <p style="text-align: center; color: #fff;">{{ acompanha.nome }}</p>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="ADICIONAR"
              style="background-color: #6F36A8; color: white; width: 90%; font-size: 15px; float: right; margin-right: 5%; margin-top: 15px;"
              icon="shopping_cart" @click="adicionarAoCarrinhoComAcompanhamentos" />
          <q-btn flat label="Fechar" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { QPage, QCard, QBtn, QBadge, QDialog, QIcon, QHeader, QToolbar, QToolbarTitle, QLayout, QImg } from 'quasar';
import { store } from '../store'; // Importar a store global

defineOptions({
  name: 'IndexPage'
});

const produtos = ref([]);
const cartDialog = ref(false);
const alertDialog = ref(false);
const removeDialog = ref(false);
const complementoDialog = ref(false);
const produtoTemp = ref(null); // Alterar para ref
const acompanhamentosSelecionados = ref([]); // Array para armazenar os acompanhamentos selecionados

const acompanhamentos = ref([
  { nome: 'Banana', imagem: '/path/to/banana.png', selected: false },
  { nome: 'Leite em pó', imagem: '/path/to/leiteempo.png', selected: false },
  { nome: 'Leite condensado', imagem: '/path/to/leitecondensado.png', selected: false },
  { nome: 'Granola', imagem: '/path/to/granola.png', selected: false },
  { nome: 'Abacaxi', imagem: '/path/to/abacaxi.png', selected: false },
  { nome: 'Kiwi', imagem: '/path/to/kiwi.png', selected: false },
  { nome: 'Nutella', imagem: '/path/to/nutella.png', selected: false },
  { nome: 'Kitkat', imagem: '/path/to/kitkat.png', selected: false },
  { nome: 'Morango', imagem: '/path/to/morango.png', selected: false }
]);

const toggleCart = () => {
  cartDialog.value = !cartDialog.value;
};

const removerCarrinho = (produto) => {
  store.removerItem(produto);
  removeDialog.value = true;
};

const adicionarAoCarrinho = (produto) => {
  store.adicionarItem(produto); // Usar a store para adicionar item
  alertDialog.value = true; // Mostrar o alerta
  produtoTemp.value = null; // Limpar produtoTemp
  acompanhamentosSelecionados.value = []; // Limpar os acompanhamentos selecionados
};

const adicionarAoCarrinhoComAcompanhamentos = () => {
  produtoTemp.value.acompanhamentos = acompanhamentosSelecionados.value.map(a => a.nome);
  store.adicionarItem(produtoTemp.value);
  alertDialog.value = true;
  complementoDialog.value = false;
  produtoTemp.value = null;
  acompanhamentosSelecionados.value = [];
};

const acomplementoAoCarrinho = (produtoA) => {
  produtoTemp.value = produtoA;
  complementoDialog.value = true; // Mostrar o alerta
};

const toggleAcompanhamento = (acompanha) => {
  if (acompanha.selected) {
    acompanha.selected = false;
    const index = acompanhamentosSelecionados.value.findIndex(a => a.nome === acompanha.nome);
    if (index !== -1) acompanhamentosSelecionados.value.splice(index, 1);
  } else {
    if (acompanhamentosSelecionados.value.length < 3) {
      acompanha.selected = true;
      acompanhamentosSelecionados.value.push(acompanha);
    }
  }
};

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

<style>
/* Adicione algum estilo para o diálogo de acompanhamentos, se necessário */
</style>
