<template>
  <div class="login container">
    <div class="columns is-centered" @submit.prevent="login">
      <form>
        <h2 class="center deep-purple-text">Login</h2>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password">
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <div class="field center">
          <button class="btn deep-purple">Login</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
        feedback: null
      }
    },
    methods: {
      login() {
        if (this.email && this.password) {
          this.feedback = null
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
              this.$router.push({
                name: 'Leaderboard'
              })
            }).catch(err => {
              this.feedback = err.message
            })
        } else {
          this.feedback = 'Please fill in both fields'
        }
      }
    }
  }
</script>


<style>
</style>