import { defineStore } from 'pinia';

export const standartStore = defineStore('standartStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});