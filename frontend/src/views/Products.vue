<template>
    <section class="section">
        <Load :is-loading="products.pending"/>
        <div class="tile is-ancestor" v-if="products.fulfilled">
            <div class="tile is-parent" v-for="product in products.value">
                <router-link
                        :to="{ name: 'Product', params: {id: product.id } }"
                >
                    <div class="card">
                        <img src="https://prag.de/wp-content/uploads/2017/12/Prag-essen-prag-Die-10-Besten-Restaurants-in-Prag.jpg">
                        <div class="card-content">
                            <h2 class="title is-4">{{ product.name }}</h2>
                            <h3 class="subtitle">{{ product.price }} CHF</h3>
                            <div class="tags">
                                <b-tag type="is-dark" v-for="category in product.categories">{{ category.name }}</b-tag>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
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
