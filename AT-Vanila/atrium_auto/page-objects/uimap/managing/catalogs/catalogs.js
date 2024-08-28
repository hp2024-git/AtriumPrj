//This catalogs module is using when Requests management feature is turning ON
module.exports = {
    get loc_tltCatalogs() {
      return $(`//div[text() = "Catalogs"]`);
    },
    get loc_sideNav_txtCatalogs() {
      return $(`//span[text() = "Catalogs"]`);
    },
};