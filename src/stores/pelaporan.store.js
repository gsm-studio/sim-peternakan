import { defineStore } from 'pinia';

export const pelaporanStore = defineStore('pelaporanStore', {
    state: () => ({
        responseData: null,
        exportData: null,
        periode: null,
        dataGrafik1: null,
    }),
    actions: {
        setResponseData(data) {
            this.responseData = data;
            this.exportData = data.data;
        },
        setPeriode(data) {
            this.periode = data;
        },
        setDataGrafik1(data) {
            this.dataGrafik1 = data;
        },
    },
});