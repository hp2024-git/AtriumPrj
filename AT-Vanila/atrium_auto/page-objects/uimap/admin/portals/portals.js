module.exports = {
  get loc_tltPortalsPage() {
    return $(`//div[text() = 'Portals']`);
  },
  get loc_txtPortalName() {
    return $(`//span[@class = "portal-name"]`);
  },
};
