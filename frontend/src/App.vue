<template>
    <div id="app">
        <b-navbar
                class="is-primary"
                fixed-top>
            <template slot="brand">
              <b-navbar-item class="has-text-weight-bold" tag="router-link" :to="{ path: '/' }">
                Urban Food
              </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/">
                    Home
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/products">
                    Products
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/cart">
                    Shopping cart
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view/>
      <Footer/>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import '../public/style.scss'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>
