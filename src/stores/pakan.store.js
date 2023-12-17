import { defineStore } from 'pinia';

export const pakanStore = defineStore('pakanStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});