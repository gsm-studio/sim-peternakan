import { defineStore } from 'pinia';

export const pelaporanStore = defineStore('pelaporanStore', {
    state: () => ({
        responseData: null,
        exportData: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
            this.exportData = data.data;
        },
    },
});