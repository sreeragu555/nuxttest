<template>
  <div>
<Navbar/>
<div class="mycenter">

<b-card title="SignUp" class="text-center">
    <b-form >
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
      <b-button type="submit" @click="login" variant="primary">Submit</b-button>
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
    login() {
      this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        console.log(error)
      }).then((user) => {
        console.log("signed up")
        //we are signed in
       
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