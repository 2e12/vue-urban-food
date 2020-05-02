<template>
    <div id="app">
        <b-navbar class="is-primary">
            <template slot="start">
                <b-navbar-item tag="router-link" to="/">
                    Home
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/about">
                    About
                </b-navbar-item>
            </template>
        </b-navbar>
        <section class="section">
            <div class="container">
                <router-view/>
            </div>
        </section>
    </div>
</template>
