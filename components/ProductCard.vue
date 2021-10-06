<template>
  <div class="card">
    <img :src="imageurl" alt="Product image" style="width: 100%"/>
    <h1>{{name}}</h1>
    <p class="price">${{amount}}</p>
    <p><button @click="additem">Add to Cart</button></p>
  </div>
</template>
<script>
export default {
  name: "Productcard",
  props: {
    name: { type: String },
    imageurl: { type: String },
    amount: { type: String },
    prodid: {type:String}
  },
  data() {
    return {};
  },
  methods: {
    additem(){
      if(this.$store.state.cartproducts.length==0)
        this.$store.dispatch('additemstocart',{
            id:this.prodid,
            Product_name:this.name,
            amount:this.amount,
            image:this.imageurl
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

.card button {
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

.card button:hover {
  opacity: 0.7;
}
</style>