<template>
  <div class="topnav">
    <nuxt-link to="/">All Products</nuxt-link>
    <nuxt-link to="/add-product">Add product</nuxt-link>
    <nuxt-link to="/Cart">
    My Cart {{this.$store.state.Cart.cartproducts.length}}
    </nuxt-link>
    

  </div>
</template>
<style>
body{
  margin: 0;
}
.topnav {
  overflow: hidden;
  background-color: rgb(255, 219, 17);
}

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}


</style>