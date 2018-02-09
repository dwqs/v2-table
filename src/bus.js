const bus = {
    _Vue: null,
    createEventBus (Vue) {
        return new this._Vue();
    },
    saveVueRef (Vue) {
        this._Vue = Vue;
    }
};

export default bus;
