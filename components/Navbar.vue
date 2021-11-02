<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand><nuxt-link to="/">Ecommerce</nuxt-link></b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <div v-if="this.$store.state.Auth.user">
          <nuxt-link to="/">All Products</nuxt-link>
          <nuxt-link to="/add-product">Add product</nuxt-link>
          <nuxt-link to="/Cart">
            <b-icon icon="cart"></b-icon> Cart ({{ this.$store.state.Cart.cartproducts.length }})
          </nuxt-link>
          </div>
          <!-- <b-nav-item href="#">Add product</b-nav-item>
        <b-nav-item href="#">Disabled</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nuxt-link to="/Login" v-if="!this.$store.state.Auth.user">Login
          <b-icon icon="arrow-right-circle"></b-icon>
          </nuxt-link>
          <nuxt-link to="/SignUp" v-if="!this.$store.state.Auth.user">Signup</nuxt-link>
          <!-- <nuxt-link to="/SignOut" >Log out</nuxt-link> -->
          <button class="signout" v-if="this.$store.state.Auth.user" @click="logout">Signout</button>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$fire.auth.signOut;
      //console.log("done");
      this.$store.commit("Auth/SET_USER",null);
    }
  }
}
</script>
<style scoped>
.navbar {
  background-color: yellow;
}
a {
  color: black;
  text-decoration: none;
  padding: 10px;
}
.signout{
  border: none;
  background: transparent;

}
</style>