<template>
  <div>
    <Navbar />
    <div class="card2">
      <span class="elements">
        <label>Product Name</label>
        <input type="text" name="pname" v-model="name" />
      </span>
      <span class="elements">
        <label>Amount</label>
        <input type="text" name="price" v-model="amount" />
      </span>
      <span class="elements">
        <label>Image</label>
        <input type="file" ref="imagefile" name="image" />
      </span>
      <button @click="addProduct">ADD PRODUCT</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Addproduct",
  data() {
    return {
      name: null,
      amount: 0,
    };
  },
  methods: {
     addProduct() {
      //imageData= this.$refs.imagefile.files[0];
      const storageRef=this.$fire.storage.ref(`${this.$refs.imagefile.files[0].name}`+ new Date()).put(this.$refs.imagefile.files[0]);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
           this.$fire.firestore.collection('products').add({
               Product_name:this.name,
               amount:this.amount,
               image:url
          }).then(
            console.log("insetred")
          );
        });
      }      
      );
    },
  },
};
</script>
<style>
.card2 {
  display: grid;
  place-items: center;
  width: 60%;
  margin: 50px auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.elements {
  margin: 10px;
  padding: 10px;
  width: 88%;
  display: table;
}
.elements input {
  width: 100%;
  padding: 10px;
}
.card2 button {
  cursor: pointer;
  padding: 15px 10px;
  margin: 20px;
  background-color: gold;
  color: black;
  border: none;
  font-weight: bold;
  border-radius: 30px;
}
</style>