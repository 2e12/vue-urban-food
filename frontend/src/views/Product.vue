<template>
    <div>

        <b-carousel
                v-model="carousel"
                :has-drag="true"
                :autoplay="false"
                :repeat="true">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <span class="image">
                    <img :src="carousel.image">
                </span>
            </b-carousel-item>
        </b-carousel>
        <section class="section">

            <h3 class="title is-3">{{ product.name }}</h3>
            <div class="tags">
                <b-tag type="is-dark" v-for="category in product.categories">{{ category.name }}</b-tag>
            </div>
            <p class="content">
                {{ product.description }}
            </p>

            <b-button type="is-primary" @click="addToBasket" expanded>Add to cart</b-button>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        activeTab: 0,
        data() {
            return {
                carousels: [
                    {image: 'https://prag.de/wp-content/uploads/2017/12/Prag-essen-prag-Die-10-Besten-Restaurants-in-Prag.jpg'},
                    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg'},
                    {image: 'https://static01.nyt.com/images/2020/01/22/dining/jo-black-bean-burgers/merlin_167531589_227b9414-ffad-4b44-ae53-67483bd2bae5-articleLarge.jpg'},
                ],
                product: false,
            }
        },
        mounted() {
            fetch(this.$apiServer + 'product/' + this.$route.params.id + '/?format=json')
                .then(response => response.json())
                .then(data => {
                    this.$data.product = data
                    if(data.detail){
                        this.$buefy.snackbar.open({
                            message: data.detail,
                            type: 'is-danger',
                        })
                    }
                });
        },
        methods: {
            addToBasket() {
                this.$buefy.snackbar.open({
                    message: 'Added to basket.',
                    type: 'is-success',
                })
            }
        }
    }
</script>
