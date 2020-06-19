<template>
  <section class="section">
    <div class="container">

      <div class="columns">
        <div class="column">

          <h1 class="title is-3">Sign in</h1>

          <b-tabs type="is-boxed" expanded>
              <b-tab-item label="Register">

                <b-field label="First Name">
                    <b-input v-model="firstName"></b-input>
                </b-field>

                <b-field label="Last Name">
                    <b-input v-model="lastName"></b-input>
                </b-field>

                <b-field label="Email">
                    <b-input type="email">
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input type="password"
                        password-reveal>
                    </b-input>
                </b-field>

                <br>
                <b-button type="is-primary" expanded>Register</b-button>

              </b-tab-item>

              <b-tab-item label="Login">

                <b-field label="Email">
                    <b-input type="email">
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input type="password"
                        password-reveal>
                    </b-input>
                </b-field>
                <br>
                <b-button type="is-primary" expanded>Login</b-button>

              </b-tab-item>
          </b-tabs>

        </div>
        <div class="column">
          <div class="content is-medium">
            <h2 class="title is-3">Your Urban Food account</h2>
            <ul class="">
              <li>Have your food delivered right to your front door.</li>
              <li>Order tasty and sustainable food.</li>
              <li>Track your order.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
