export default {
    additemstocart({ commit }, value) {
        console.log(value)
        commit('setProductscart', value);
    }
}