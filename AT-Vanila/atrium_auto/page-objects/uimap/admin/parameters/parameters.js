module.exports = {
    get loc_tltParamatersPage() {
      return $(`//div[text() = 'Parameters']`);
    },
    get loc_sideNav_txtParamaters() {
      return $(`//span[text() = "Parameters"]`);
    },
    get loc_txtContactAndMailingInformations() {
      return $(`//div[text() = "Contact and mailing informations"]`);
    },
    get loc_txtAccountParameters() {
      return $(`//div[text() = "Account parameters"]`);
    },
    get loc_txtFeatures() {
      return $(`//div[text() = "Features"]`);
    },
  };
  