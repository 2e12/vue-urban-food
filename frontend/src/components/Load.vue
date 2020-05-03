<template>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
</template>

<script>
    export default {
        name: 'Load',
        props: {
            isLoading: Object
        }
    }
</script>
