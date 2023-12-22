import { defineStore } from 'pinia';

export const pelaporanStore = defineStore('pelaporanStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});