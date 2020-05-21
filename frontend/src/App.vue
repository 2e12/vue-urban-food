<template>
    <div id="app">
        <b-navbar
                class="is-primary"
                fixed-top>
            <template slot="brand">
              <b-navbar-item class="has-text-weight-bold" tag="router-link" :to="{ path: '/' }">
                Urban Food
              </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/">
                    Home
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/products">
                    Products
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/cart">
                    Shopping cart
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view/>
    </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&display=swap');
//Custom font
$family-sans-serif: 'IBM Plex Sans', sans-serif;

@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #7cb342;
$primary-invert: findColorInvert($primary);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
);

$fullhd-enabled: false;
$widescreen-enabled: false;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
