import { defineStore } from 'pinia';

export const strainStore = defineStore('strainStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});