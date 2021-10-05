
export const state = () =>({
    products : []
})
export const mutations = {
    setProducts(state, value){
        state.products=[...value];
    }
  }
  export const actions = {
    setitems(state,commit){
      this.$fire.firestore.collection('products').get().then(snapshot => {
        snapshot.forEach(prod => {
        this.commit('setProducts',prod.data())
        })
    })
    }
  }