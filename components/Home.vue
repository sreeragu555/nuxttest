<template>
  <div>
      <Navbar/>
      <ul>
          <li v-for="item in getAllProducts" :key="item.index" >
             <ProductCard :name="item.Product_name" :imageurl="item.image" :amount="item.amount" :prodid="item.id"/>
          </li>
      </ul>
          <div v-if="noproductshow">
            No Product found
          </div>
          <v-snackbar
      :timeout="-1"
      :value="true"
      color="success"
      absolute
      right
      rounded="pill"
      top
    >
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar>
      
    </div>

</template>
<script>
export default {
  name:"Home",
  data(){
    return{
        noproductshow:false
          }
  },
computed:{
 getAllProducts(){
   if(this.$store.state.Product.products.length!=0)
   {
    this.noproductshow=false; 
    return this.$store.getters['Product/getProduct'];
   }
   else
    this.noproductshow=true;
 }
},
}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li{
  float: left;
}
li div {
  display: block;
  text-align: center;
  padding: 16px;
  font-size: 20px;
  text-decoration: none;
}
</style>