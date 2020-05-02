<template>
    <section class="section">
        <div class="tile is-ancestor">
            <div class="tile is-parent" v-for="product in products">
                <router-link
                  :to="{ name: 'Product', params: {id: product.id } }"
                >
                    <div class="card">
                        <img src="https://prag.de/wp-content/uploads/2017/12/Prag-essen-prag-Die-10-Besten-Restaurants-in-Prag.jpg">
                        <div class="card-content">
                            <h4 class="title is-4">{{ product.name }}</h4>
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
    export default {
        name: 'Home',
        activeTab: 0,
        data() {
            return {
                products: false,
            }
        },
        mounted() {
            fetch(this.$apiServer + 'product/?format=json')
                .then(response => response.json())
                .then(data => {
                    this.$data.products = data
                    if(data.detail){
                        this.$buefy.snackbar.open({
                            message: data.detail,
                            type: 'is-danger',
                        })
                    }
                });
        }
    }
</script>
