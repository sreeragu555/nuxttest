<template>
  <div class="card">
    <img :src="imageurl" alt="Product image" style="width: 100%"/>
    <h1>{{name}}</h1>
    <p class="price">${{amount}}</p>
    <div v-if="existInCart==false">
    <p><button @click="additem" class="addtocart_btn">Add to Cart</button></p>
    </div>
    <div v-if="existInCart">
      <button>+</button>
      <p>{{getCartquantity()}}</p>
      <button>-</button>
    </div>  
  </div>
</template>
<script>
export default {
  name: "Productcard",
  props: {
    name: { type: String },
    imageurl: { type: String },
    amount: { type: String },
    prodid: {type:String},
    existInCart : {type:Boolean}
  },
  data() {
    return {};
  },
  methods: {
    getCartquantity(){
      return this.$store.getters['Cart/getItemQuantity',this.prodid];
    },
    additem(){
     // if(this.$store.state.Cart.cartproducts.length==0)
        this.$store.dispatch('Cart/additemstocart',{
            id:this.prodid,
            Product_name:this.name,
            amount:this.amount,
            image:this.imageurl,
            quantity:1
        })
        this.existInCart = true
        this.$store.dispatch('Product/updateState',{
            id:this.prodid,
            amount:this.amount,
            image:this.imageurl,
            existInCart:true
        })
        
    }
  }
};
</script>
<style>
.card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  max-width: 300px;
  margin: 10px;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.addtocart_btn {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #422057ff;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.addtocart_btn:hover {
  opacity: 0.7;
}
</style>