<template>
  <div class="darkfooter">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="has-text-weight-bold">Store</h3>
            <ul>
              <li>
                <router-link :to="{ name: 'Home' }">
                  Home
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Products' }">
                  Products
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'SignIn' }">
                  Sign In
                </router-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 class="has-text-weight-bold">About</h3>
            <ul>
              <li>
                <router-link :to="{ name: 'Imprint' }">
                  Imprint
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'About' }">
                  About us
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <br>
        <span class="has-text-weight-bold">Developed by <a href="https://github.com/2e12">2e12</a></span>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>
