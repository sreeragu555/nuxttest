export default{
    setProductscart(state,value){
        state.cartproducts.push(value);
      },
    setProductQuantityInc(state,id){
      state.cartproducts.forEach(prod=>{
        if(prod.id == id)
        {
          console.log("hi");
            prod.quantity++;
        }
    })
    }
}