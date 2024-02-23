// import exportFromJSON from "export-from-json";

// export const excelParser = () => {
//   function exportDataFromJSON(data, newFileName, fileExportType) {
//     if (!data) return;
//     try {
//       const fileName = newFileName || "laporan";
//       const exportType = exportFromJSON.types[fileExportType || "csv"];
//       exportFromJSON({ data, fileName, exportType });
//     } catch (e) {
//       throw new Error("Parsing failed!");
//     }
//   }

//   return {
//     exportDataFromJSON
//   };
// };

import exportFromJSON from "export-from-json";

export const excelParser = () => {
  function exportDataFromJSON(data, newFileName, fileExportType, customHeaders) {
    if (!data) return;
    try {
      const fileName = newFileName || "laporan";
      const exportType = exportFromJSON.types[fileExportType || "xls"];

      // Buat array baru untuk menyimpan data yang akan diekspor
      const formattedData = data.map(item => {
        const formattedItem = {};
        // Iterasi melalui setiap item dalam data
        Object.keys(item).forEach(key => {
          // Periksa apakah nama kustom tersedia di customHeaders
          if (customHeaders[key]) {
            const customHeader = customHeaders[key]; // Ambil nama kustom
            formattedItem[customHeader] = item[key]; // Tambahkan ke objek formattedItem
          }
        });
        return formattedItem; // Tambahkan objek formattedItem ke dalam array formattedData
      });

      exportFromJSON({ data: formattedData, fileName, exportType });
    } catch (e) {
      throw new Error("Parsing failed!");
    }
  }

  return {
    exportDataFromJSON
  };
};
