<template>
       <div class="card">
  <img :src="imageurl" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{name}}</b></h4> 
    <p>{{amount}}</p> 
    <button>Add to Cart</button>
  </div>
</div>
</template>
<script>
export default {
    name:"Productcard",
    props:{
        name:{type:String},
        imageurl:{type:String},
        amount:{type:Number}
    },
    data(){
        return{
           
        }
    },
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  margin:20px 50px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.card button {
  cursor: pointer;
  padding: 15px 10px;
  margin: 20px;
  background-color: rgb(135 129 231);
  color: white;
  border: none;
  font-weight: bold;
  
}
</style>