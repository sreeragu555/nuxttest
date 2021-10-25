<template>
  <div class="card">
    <img :src="imageurl" alt="Product image" style="width: 100%"/>
    <h1>{{name}}</h1>
    <p class="price">${{amount}}</p>
    <div v-if="existInCartLocal==false">
    <p><button @click="additem" class="addtocart_btn">Add to Cart</button></p>
    </div>
    <v-row>
      <v-col v-if="existInCartLocal"
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          tile
        >
          <v-btn
      class="mx-2"
      fab
      small
      color="primary"
      @click="increaseQuantity"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
        </v-card>
         <v-card
          class="pa-2"
          tile
        >
          {{this.qty}}
        </v-card>
         <v-card
          class="pa-2"
        >
         <v-btn
      class="mx-2"
      fab
      small
      color="primary"
      @click="decreaseQuantity"
    >
      <v-icon>
        mdi-minus
      </v-icon>
    </v-btn>
        </v-card>
      </v-col>
    </v-row>
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
    return {
      cart:[],
      qty:0,
      existInCartLocal:this.existInCart
    };
  },
  methods: {
    increaseQuantity(){
      this.$store.dispatch('Cart/increase',this.prodid)
      this.qty++;
    },
    decreaseQuantity(){
      
      this.$store.dispatch('Cart/decrease',this.prodid)
      this.qty--;
      if(this.qty==0){
        this.existInCartLocal = false;
      }
    },
    getCartquantity(){
      this.cart=this.$store.getters['Cart/getCart'];
      this.cart.forEach(prod=>{
            if(prod.id == this.prodid)
            {
              // console.log(prod.quantity);
                this.qty=prod.quantity;
            }
        })

      //return this.$store.getters['Cart/getItemQuantity'];
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
        this.existInCartLocal = true
        this.$store.dispatch('Product/updateState',{
            id:this.prodid,
            amount:this.amount,
            image:this.imageurl,
            existInCart:true
        })
       this.getCartquantity();
    }
  }
};
</script>
<style>
.v-icon{
  color: black!important;
}
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