<template>
  <div class="darkfooter">
    <div class="container">
      <section class="section">
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
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>
          <div class="column">
            <h3 class="has-text-weight-bold">About</h3>
            Imprint<br>
            About us<br>
            Data protection<br>
          </div>
        </div>
        <br>
        <span class="has-text-weight-bold">© Gabriel Beutler 2020</span>
      </section>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>
