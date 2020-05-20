<template>
    <section class="section">
      <h1 class="title is-4">Shopping Cart ({{ productCount }})</h1>
      <template v-for="product in products">
          <div class="card">
            <div class="card-content">
              {{ product.name }}
            </div>
            <footer class="card-footer">
              <a class="card-footer-item">
                Remove
              </a>
              <a class="card-footer-item">
                Show
              </a>
            </footer>
          </div>
          <br>
        </template>
    </section>
</template>

<script>
    export default {
        name: 'Basket',
        data: () => ({
            products: [
                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },
                                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },                {
                    "id": 1,
                    "name": "BBQ Pulled Pork Burger",
                    "price": "12.99",
                    "quantity": 0,
                },
            ],
        }),
        computed: {
          productCount: function () {
            return this.products.length
          }
        }
    }
</script>
