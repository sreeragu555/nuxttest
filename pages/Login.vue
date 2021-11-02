<template>
<div>
<Navbar/>
<div class="mycenter">

<b-card title="Login" class="text-center">
    <b-form @submit="login">
      <b-form-group
       id="input-group-2" label="Your Username:" label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter Username"
          v-model="auth.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="Enter password"
          v-model="auth.password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-card>



  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
    },
  methods: {
    login(event) {
      event.preventDefault();
     // console.log("in")
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        console.log(error.message);
      }).then((users) => {
        //we are signed in
       //console.log(user)
       const {uid,email} = users.user;
        this.$store.commit("Auth/SET_USER",{uid,email});
         $nuxt.$router.push('/')
      })
    },

}
}
</script>
<style scoped>
.card{
    width: 800px;
    max-width: 800px!important;
}
.mycenter{
    display: grid;
    place-items: center;
}
.mycenter > * {
    margin-top: 250px;
}
</style>