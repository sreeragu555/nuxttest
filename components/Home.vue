<template>
  <div>
      <Navbar/>
      <div id="Products">
          <div v-for="item in getallproducts" :key="item.index">
             <ProductCard :name="item.name" :imageurl="item.imageurl" :amount="item.amount"/>
          </div>
          <div v-if="noproductshow">
            No Product found

          </div>
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
  this.$store.dispatch('allproduct/setitems')
},
computed:{
 getallproducts(){
   if(this.$store.state.allproduct.products.length!=0)
   return this.$store.state.allproduct.products;
   else
    this.noproductshow=true;
 }
},

// created(){
//   this.Products=this.$store.getters.Getproducts;
//   console.log(this.Products)
// },

  // created() {
  //     this.$fire.firestore.collection('products').get().then((query)=>{
  //       query.forEach(element => {
  //         // this.Products.push({
  //         //   name:element.data().Product_name,
  //         //   amount:element.data().amount,
  //         //   imageurl:element.data().image
  //         // })
  //         this.$store.allproducts.products
  //       });
  //     })
  //     console.log(this.Products)
  //           },
  methods:{
    
  }
}
</script>
