<template>
  <div class="topnav">
    <a href="/">All Products</a>
    <a href="/AddProduct">Add product</a>
    <nuxt-link to="/Cart">
    My Cart {{this.$store.state.cartproducts.length}}
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