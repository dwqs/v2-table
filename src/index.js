function install (Vue) {
    console.log('install table');
};

const V2Table = {
    install
};

export default V2Table;

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(V2Table);
}