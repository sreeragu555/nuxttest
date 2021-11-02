export default {
    additemstocart({ commit }, value) {
        commit('setProductscart', value);
    },
    increase({commit},value) {
        commit('setProductQuantityInc',value)
    },
    decrease({commit},value) {
        commit('setProductQuantityDec',value)
    }
}