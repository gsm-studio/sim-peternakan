import { defineStore } from 'pinia';

export const pencatatanStore = defineStore('pencatatanStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});