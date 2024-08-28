//This catalogs and product file module are using when Requests multi-editor management feature is turning ON
module.exports = {
    get loc_tltCatalogsAndProductFiles() {
      return $(`//div[text() = "Catalogs and product files"]`);
    },
    get loc_sideNav_txtCatalogsAndProductFiles() {
      return $(`//span[text() = "Catalogs and product files"]`);
    },
};