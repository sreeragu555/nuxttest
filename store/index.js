
export const state = () =>({
    products : [],
    cartproducts : []
})
export const mutations = {
    setProducts(state, value){
        state.products.push(value);
    },
    setProductscart(state,value){
      state.cartproducts.push(value);
    }
  }
  export const actions = {
    setitems(state){
      this.$fire.firestore.collection('products').get().then(snapshot => {
        snapshot.forEach(prod => {
          const prodobj={
            id: prod.id,
            Product_name:prod.data().Product_name,
            amount:prod.data().amount,
            image:prod.data().image
          }
        this.commit('setProducts',prodobj)
        })
    })
    },
    additems(value){
      this.commit('setProducts',value);
    },
    removeitemsfromcart(value){
      this.commit('setProducts',value);
    },
  additemstocart(value){
    this.commit('setProducts',value);
  }
  }