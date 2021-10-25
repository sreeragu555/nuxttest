<template>
    <div>
        <Navbar/>
        <v-card v-if="this.$store.state.Cart.cartproducts.length!=0"
    class="mx-auto"
    max-width="400"
    tile
  >
  <v-list-item two-line v-for="item in getCartproducts" :key="item.index">
      <v-list-item-content>
        <v-list-item-title>{{item.Product_name}}</v-list-item-title>
        <v-list-item-subtitle>{{item.amount}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

        </v-card>
<v-card v-if="this.$store.state.Cart.cartproducts.length==0"
    class="mx-auto"
    color="secondary"
    width="200px"
  >
    <v-card-text>
      There is no items in cart
    </v-card-text>
  </v-card>
        <!-- <ul>
          <li v-for="item in getCartproducts" :key="item.index" >
             {{item}}
          </li>
      </ul> -->
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    computed:{
 getCartproducts(){
     return this.$store.getters['Cart/getCart'];
 }
    }
}
</script>