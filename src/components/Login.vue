<template>
  <div class="login">
    <h3 class="title title--login">Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="login">Connection</button>
    <p>If you don't have an account, You can <router-link to="/sign-up">create one</router-link>.</p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function (){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert(err.message)
          }
        );
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
