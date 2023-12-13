import { defineStore } from 'pinia';

export const penjadwalanStore = defineStore('penjadwalanStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});