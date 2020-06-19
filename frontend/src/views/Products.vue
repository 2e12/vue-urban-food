<template>
  <div class="container">

    <div class="flex-container">
      <div v-if="products.pending" class="card" v-for="index in 6" :key="index">

        <div class="card-content">
          <b-skeleton height="145px" active></b-skeleton>
          <br>
          <h2 class="title is-4"><b-skeleton active></b-skeleton></h2>
          <h3 class="subtitle"><b-skeleton width="120px" active></b-skeleton></h3>

          <b-skeleton width="64px" active></b-skeleton>
        </div>
      </div>


      <template v-if="products.fulfilled" v-for="product in products.value">
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
