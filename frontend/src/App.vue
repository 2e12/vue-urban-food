<template>
    <div id="app">
        <b-navbar
                class="is-primary"
                fixed-top>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/">
                    Home
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/about">
                    About
                </b-navbar-item>
            </template>
        </b-navbar>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #57d319;
$primary-invert: findColorInvert($primary);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
