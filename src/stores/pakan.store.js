import { defineStore } from 'pinia';

export const pakanStore = defineStore('pakanStore', {
    state: () => {
        return {
            responseData: [],
        }
    },
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});