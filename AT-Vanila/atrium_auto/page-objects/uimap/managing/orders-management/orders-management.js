module.exports = {
    get loc_tltOrdersManagementPage() {
      return $(`//div[text() = "Orders management"]`);
    },
    get loc_sideNav_txtOrdersManagement() {
      return $(`//span[text() = "Orders management"]`);
    },
};