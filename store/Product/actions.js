export default{
    additems({commit},value){
        commit('setProducts',value);
      },
    updateState({commit},value)
    {
      commit('updateProducts',value);
    }
}