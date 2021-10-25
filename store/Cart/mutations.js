export default{
    setProductscart(state,value){
        state.cartproducts.push(value);
      },
    setProductQuantityInc(state,id){
      state.cartproducts.forEach(prod=>{
        if(prod.id == id)
        {
            prod.quantity++;
        }
    })
    },
    setProductQuantityDec(state,id){
      state.cartproducts.forEach((prod,index)=>{
        if(prod.id == id)
        {
          if(prod.quantity==1){
            state.cartproducts.splice(index,1);
          }
          else{
            prod.quantity--;
          }
            
        }
    })
    }
}