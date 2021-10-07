<template>
    <div>
        <Navbar/>
        Cart
        <ul>
          <li v-for="item in getCartproducts" :key="item.index" >
             {{item.id}}
          </li>
      </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    computed:{
 getCartproducts(){
     return this.$store.state.cartproducts;
 }
    }
}
</script>