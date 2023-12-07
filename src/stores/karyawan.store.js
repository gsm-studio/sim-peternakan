import { defineStore } from 'pinia';

export const karyawanStore = defineStore('karyawanStore', {
    state: () => ({
        responseData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
        },
    },
});