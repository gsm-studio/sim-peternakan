import { defineStore } from 'pinia';

export const treatmentStore = defineStore('treatmentStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});