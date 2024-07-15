module.exports = {
  get loc_tltD365FinanceAndOperation() {
    return $(`//span[@id = "NavBarDashboard_label"]`);
  },
  get loc_txtSearchBox() {
    return $(`//input[@id="NavigationSearchBox_searchBoxInput_input"]`);
  },
  get loc_btnSearchList() {
    return $(`//ul[@id="NavigationSearchBox_listbox"]`);
  },
  get loc_btnUser() {
    return $(`//button[@id = "UserBtn"]`);
  },
  get loc_btnSignOut() {
    return $(`//button[@id="SignOut"]`);
  },
};
