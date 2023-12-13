import { defineStore } from 'pinia';

export const tugasStore = defineStore('tugasStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});