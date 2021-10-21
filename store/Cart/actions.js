export default {
    additemstocart({ commit }, value) {
        commit('setProductscart', value);
    },
    increase({commit},value) {
        commit('setProductQuantityInc',value)
    }
}