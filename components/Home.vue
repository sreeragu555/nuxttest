<template>
  <div>
      <Navbar/>
      <ul>
          <li v-for="item in getallproducts" :key="item.index" >
             <ProductCard :name="item.Product_name" :imageurl="item.image" :amount="item.amount" :prodid="item.id"/>
          </li>
      </ul>
          <div v-if="noproductshow">
            No Product found
          </div>
      
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
created(){
  this.$store.dispatch('setitems')
},
computed:{
 getallproducts(){
   if(this.$store.state.products.length!=0)
   {
    this.noproductshow=false; 
     return this.$store.state.products;
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