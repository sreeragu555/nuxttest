
        
export const actions = {
    async nuxtServerInit({ commit }) {
       
      await this.$fire.firestore.collection('products').get().then(snapshot => {
        snapshot.forEach(prod => {
          let prodobj={
            id: prod.id,
            Product_name:prod.data().Product_name,
            amount:prod.data().amount,
            image:prod.data().image,
            existInCart:false
          };
          //console.log(prodobj);
          commit('Product/setProducts',prodobj)
        })
        
    })
    }
    
  }
  