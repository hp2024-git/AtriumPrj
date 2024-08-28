module.exports = {
  //Left area of header UI components
  get loc_navPortalsMenu() {
    return $(`//div[@class = 'left-header-content']`);
  },
  get loc_txtPortalsItems() {
    return $(`//div[@role= 'menu']`);
  },
  get loc_divPortalsMenuPanel() {
    return $(
      `//div[starts-with(@id, 'mat-menu-panel')]//div//div//div[text() = 'Multiple portal']`
    );
  },
  get loc_btnShowHideSecondNavMenu() {
    return $(`//div[contains(@id, "fold-button")]`);
  },
  //<-> End Area <->
  //Area of Secondary Side Navigation Menu UI components
  get loc_secondarySideNav_divMenu() {
    return $(`//div[contains(@id, "sidenav-secondary-menu-content")]`);
  },
  get loc_secondarySideNav_txtKPI() {
    return $(`//span[text() = "KPI"]`);
  },
  get loc_secondarySideNav_txtRequestsManagement() {
    return $(`//span[text() = "Requests management"]`);
  },
  get loc_secondarySideNav_txtQuotesManagement() {
    return $(`//span[text() = "Quotes management"]`);
  },
  get loc_secondarySideNav_txtOrdersManagement() {
    return $(`//span[text() = "Orders management"]`);
  },
  get loc_secondarySideNav_txtLicencesManagement() {
    return $(`//span[text() = "Licences management"]`);
  },
  get loc_secondarySideNav_txtCatalogs() {
    return $(`//span[text() = "Catalogs"]`);
  },
  get loc_secondarySideNav_txtDocuments() {
    return $(`//span[text() = "Documents"]`);
  },
  get loc_secondarySideNav_txtAlerts() {
    return $(`//span[text() = "Alerts"]`);
  },
  //<-> End Area <->
  //Area of Main Navigation Menu
  get loc_mainNav_txtAdmin() {
    return $(`//span[text() = "Admin"]`);
  },
  get loc_mainNav_txtManaging() {
    return $(`//span[text() = "Managing"]`);
  },
  //<-> End Area <->
  //Right area of header UI components
  get loc_divUserInfo() {
    return $(`//div[@class = "user"]`);
  },
  get loc_btnSignOut() {
    return $(`//button[@role = "menuitem"]//span[text() = "Disconnect"]`);
  },
  //<-> End Area <->
  //Delete, Remove, Back, Save buttons on all the pages which have this components can be reused
  get loc_btnDelete() {
    return $(`//button//span[text() = " Delete "]`);
  },
  get loc_btnRemove() {
    return $(`//button//span[text() = " Remove "]`);
  },
  get loc_btnBack() {
    return $(`//button//span[text() = " Back "]`);
  },
  get loc_btnSave() {
    return $(`//button//span[text() = " Save "]`);
  },
  //<-> End Area <->
  //Common components UI on management pages (e.g. Actors, Entities,...)
  get loc_btnAdd() {
    return $(`//button//span[text() = "Add"]`);
  },
  get loc_inputSearch() {
    return $(`//input[@type = "text"]`);
  },
  get loc_txtSearch() {
    return $(`//mat-icon[text() = "search"]`);
  },
  get loc_tltFilter() {
    return $(`//div[@title = "filter"]`);
  },
  get loc_txtField() {
    return $(`//mat-label[text() = "Field"]`);
  },
  get loc_txtOperator() {
    return $(`//mat-label[text() = "Operator"]`);
  },
  get loc_txtValue() {
    return $(`//mat-label[text() = "Value"]`);
  },
  //<-> End Area <->
};
