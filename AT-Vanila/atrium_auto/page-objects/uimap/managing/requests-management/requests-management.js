module.exports = {
    get loc_tltRequestsManagementPage() {
      return $(`//div[text() = "Requests management"]`);
    },
    get loc_sideNav_txtRequestsManagement() {
      return $(`//span[text() = "Requests management"]`);
    },
};