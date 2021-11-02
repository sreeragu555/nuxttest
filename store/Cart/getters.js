
export default{
    getCart : (state) => {
        return state.cartproducts;
    },
    getItemQuantity: (state,id) => {
        state.cartproducts.forEach(prod=>{
            console.log(id);
            if(prod.id == id)
            {
                console.log("hi");
                return prod;
            }
        })
    }
}