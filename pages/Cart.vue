<template>
    <div>
        <Navbar/>
        Cart
        <v-card
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