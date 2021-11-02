<template>
<div>
<Navbar/>
<div style="display:grid;place-items:center">
<b-card
       border-variant="primary"
        header="Cart"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
    <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="item in getCartproducts" :key="item.index">
    {{item.Product_name}}
    <b-badge variant="primary" pill>{{item.quantity}}</b-badge>
  </b-list-group-item>
</b-list-group>

<div v-if="this.$store.state.Cart.cartproducts.length==0">
    Cart is empty
</div>
</b-card>
</div>

</div>
</template>
<script>
export default {
   
   computed:{
    getCartproducts(){
     return this.$store.getters['Cart/getCart'];
 }

   }
   }
</script>
<style scoped>
.card{
    width: 800px;
    max-width: 800px!important;
}
</style>