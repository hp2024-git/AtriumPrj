module.exports = {
  get loc_tltEntitiesPage() {
    return $(`//div[text() = "Entities management"]`);
  },
  get loc_sideNav_txtEntities() {
    return $(`//span[text() = "Entities"]`);
  },
};
