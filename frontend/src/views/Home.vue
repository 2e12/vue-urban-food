<template>
  <div>
    <section class="section">
      <div class="columns has-text-centered">
        <div class="column">
          <img style="max-width:200px;" src="img/icons/icon-384x384.png"></img>
        </div>
        <div class="column">
          <h1 class="title is-1">Urban Food</h1>
          <h2 class="subtitle is-4">We deliver your food directly to your front door!</h2>
          <b-button tag="router-link" to="/products" type="is-primary" size="is-medium">Shop now</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>
