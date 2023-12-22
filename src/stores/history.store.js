import { defineStore } from 'pinia';

export const historyStore = defineStore('historyStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});