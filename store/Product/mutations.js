export default{
    setProducts(state, value){
        state.products.push(value);
    },
    updateProducts(state,value){
        state.products.forEach(element => {
            if(element.id==value.id){
                element.existInCart = value.existInCart,
                element.amount = value.amount,
                element.image = value.image
            }
        });
    }
}