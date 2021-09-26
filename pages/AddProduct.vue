<template>
    <div>
        <Navbar/>
        <div class="card">
            <span class="elements">
                <label>Product Name</label>
                <input type="text" name="pname" v-model="name">
            </span>
            <span class="elements">
                <label>Amount</label>
                <input type="text" name="price" v-model="amount">
            </span>
            <span class="elements">
                <label>Image</label>
                <input type="file" name="image">
            </span>
            <button @click="addProduct">ADD PRODUCT</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Addproduct",
    data(){
        return {
            name:null,
            amount:0,
        };
    },
    methods:{
        async addProduct(){
             await this.$fire.firestore.collection('users').add({
                Product:this.name,
                amount:this.amount
            });
        }
    }
}
</script>
<style>
.card{
    display: grid;
    place-items: center;
    width:60%;
    margin: 10px auto;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.elements{
    margin: 10px;
    padding: 10px;
    width: 88%;
    display: table;
}
.elements input{
    width: 100%;
    padding: 10px;
}
.card button{
    padding :15px 10px;
    margin: 20px;
    background-color: gold;
    color: black;
    border: none;
    font-weight: bold;
    border-radius: 30px;
}
</style>