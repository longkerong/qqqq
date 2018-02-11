import LoadingComponent from './Loading.vue'
const Loading = {
    install: function(Vue) {
        Vue.component('Loading', LoadingComponent)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Loading);
}
export default Loading