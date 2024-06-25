const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLogin.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },

    ]
  },
  {
    path: '/registro',
    component: () => import('layouts/MainRegistro.vue'),
    children: [
      { path: '', component: () => import('pages/LoginRegistro.vue') },

    ]
  },
  {
    path: '/Pagamento',
    component: () => import('layouts/MainPagamento.vue'),
    children: [
      { path: '', component: () => import('pages/PagamentoPage.vue') },

    ]
  },
  {
    path: '/Home',
    component: () => import('layouts/MainHome.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },

    ]
  },
  {
    path: '/Option',
    component: () => import('layouts/MainConfg.vue'),
    children: [
      { path: '', component: () => import('pages/ConfPage.vue') },

    ]
  },
  {
    path: '/UserPage',
    component: () => import('layouts/MainUser.vue'),
    children: [
      { path: '', component: () => import('pages/UserPage.vue') },

    ]
  },
  {
    path: '/Consulta',
    component: () => import('layouts/MainConsulta.vue'),
    children: [
      { path: '', component: () => import('pages/ConsultaPage.vue') },

    ]
  },
  {
    path: '/Cardapio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

    ]
  },
  {
    path: '/Carrinho',
    component: () => import('layouts/MainCarrinho.vue'),
    children: [
      { path: '', component: () => import('pages/CarrinhoPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
