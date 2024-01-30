import { defineStore } from 'pinia';

export const kandangStore = defineStore('kandangStore', {
    state: () => ({
        responseData: null,
        kategori: null,
        dataSidebar: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
            this.kategori = data.data.kategori_kandang;
        },
        setDataSidebar(data) {
            this.dataSidebar = data;
        }
    },
});