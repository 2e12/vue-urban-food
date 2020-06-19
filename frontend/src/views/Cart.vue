<template>
  <div class="container">
    <div class="table-container">
      <template v-if="productCount != 0">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products">
              <td>
                <router-link :to="{ name: 'Product', params: {id: product.id } }">{{ product.name }}</router-link>
              </td>
              <td>{{ product.price * product.quantity }}</td>
              <td>
                <b-field>
                  <b-numberinput v-model="product.quantity" style="max-width:100px;" min="1" max="10" size="is-small" controls-position="compact">
                  </b-numberinput>
                </b-field>
              </td>
            </tr>
          </tbody>
        </table>
        <section class="section has-text-right"
                 style="padding-bottom: 24px;">
          <b-button tag="router-link" to="/products" expanded>
              Add more products
          </b-button>
          <br>
          <b-button type="is-primary" @click="order()" expanded>
              Order & Checkout
          </b-button>
        </section>
      </template>

      <template v-else>
        <div class="section">
          <b-message>
            <div class="content">
              <strong>No items</strong><br>
              You do not have any items in your shopping cart yet. Return later when you have found something suitable and place your order.
            </div>
            <b-button type="is-primary" tag="router-link" to="/products">
                Go to Products
            </b-button>
          </b-message>
        </div>
      </template>

    </div>
  </div>


</template>

<script>
    export default {
        name: 'Basket',
        data: () => ({
            products: [

            ],
        }),
        methods: {
          order() {
            this.$buefy.dialog.confirm({
              title: 'Not signed in',
              message: 'We have determined that you are not signed in Log in or create an account so that we can your order to you. It won\'t take long, we promise.',
              cancelText: 'Cancel',
              confirmText: 'Sign in',
              onConfirm: () => this.$router.push('SignIn'),
            })
          },
        },
        computed: {
          productCount: function () {
            return this.products.length
          },
        },
        mounted() {
          this.products = this.$store.state.cart
        }
    }
</script>
