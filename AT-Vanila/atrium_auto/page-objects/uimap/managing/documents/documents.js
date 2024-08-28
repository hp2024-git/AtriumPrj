module.exports = {
    get loc_tltDocumentsPage() {
      return $(`//div[text() = "Documents"]`);
    },
    get loc_sideNav_txtDocuments() {
      return $(`//span[text() = "Documents"]`);
    },
};