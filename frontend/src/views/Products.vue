<template>
  <div class="container">
    <Load :is-loading="products.pending"/>
    <div v-if="products.fulfilled" class="flex-container">
      <template v-for="product in products.value">
        <div class="card">
          <router-link
          :to="{ name: 'Product', params: {id: product.id } }"
          >
          <img src="https://prag.de/wp-content/uploads/2017/12/Prag-essen-prag-Die-10-Besten-Restaurants-in-Prag.jpg">
          <div class="card-content">
            <h2 class="title is-4">{{ product.name }}</h2>
            <h3 class="subtitle">{{ product.price }} CHF</h3>
            <div class="tags">
              <b-tag type="is-dark" v-for="category in product.categories">{{ category.name }}</b-tag>
            </div>
          </div>
        </router-link>
      </div>
    </template>
  </div>
</div>
</template>

<script>
import Load from '../components/Load.vue'

export default {
  name: 'Products',
  components: {
    Load,
  },
  data: () => ({
    products: {},
  }),
  fetch: {
    products() {
      return {
        url: this.$apiServer + 'product/?format=json',
      }
    }
  }
}
</script>

<style lang="scss">
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

.flex-container > .card {
  flex-grow:1;
  width:260px;
  margin:24px;
}
</style>
