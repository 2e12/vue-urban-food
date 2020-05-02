<template>
    <div class="home has-text-centered">
        <div class="card" v-for="post in posts">
            <div class="card-content">
                <p class="title is-4">{{ post.author }}</p>
                <div class="content">
                    {{ post.text }}
                </div>
            </div>
        </div>
        <b-button @click="clickMe">Click Me</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function () {
            return {
                posts: []
            }
        },
        methods: {
            clickMe() {
                fetch(this.$apiServer + 'posts/?format=json')
                    .then(response => response.json())
                    .then(data => this.$data.posts = data );
            }
        },
    }
</script>
