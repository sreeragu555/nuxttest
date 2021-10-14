export default {
    additemstocart({ commit }, value) {
        commit('setProductscart', value);
    }
}