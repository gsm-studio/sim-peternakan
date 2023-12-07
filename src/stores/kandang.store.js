import { defineStore } from 'pinia';

export const kandangStore = defineStore('kandangStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});