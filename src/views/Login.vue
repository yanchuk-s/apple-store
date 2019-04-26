<template>
  <div class="login-wrp">
     <div class="login-form">
       <div v-if="error" class="error">
         Incorrect login/password
       </div>
        <v-text-field
        v-model="login"
        label="login"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        password
      ></v-text-field>
      <v-btn @click="loginbtn">Login</v-btn>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  data(){
    return{
      error: false,
      login: '',
      password: ''
    }
  },
  methods: {
    loginbtn: function () {
      if(this.login == '' && this.password == ''){
        this.error = true
      }else{
        this.error = false
        let admin = this.$store.getters.getAdmin

        if(this.login == admin.login || this.password == admin.password){
          this.error = false
          this.login = ''
          this.password = ''
          this.$cookie.set('login', 'true', 1);
          this.$router.push({ name: 'admin',})
        }else{
          this.error = true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.login-wrp{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form{
    button{
      width: 100%;
      margin: 0;
    }
  }
}
</style>
