<template>
  <div class="login container">
    <div class="columns is-centered extra-margins" @submit.prevent="login">
      <form>
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
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({
              name: 'add',
            });
          }).catch((err) => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Please fill in both fields';
      }
    },
  },
};
</script>


<style>
</style>
