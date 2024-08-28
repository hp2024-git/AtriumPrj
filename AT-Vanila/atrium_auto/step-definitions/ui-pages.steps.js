const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

//All the pages on the Admin main menu
const EntitiesPage = require("../page-objects/page/admin/entities.page.js");
const ParametersPage = require("../page-objects/page/admin/parameters.page.js");
const ActorPage = require("../page-objects/page/admin/actors.page.js");
const PortalsPage = require("../page-objects/page/admin/portals.page.js");
const RequestTypePage = require("../page-objects/page/admin/request-types.page.js");
const EditorConfigurationPage = require("../page-objects/page/admin/set-editors.page.js");
const SubscriptionFormPage = require("../page-objects/page/admin/subscription-form.page.js");
const DatasUploadPage = require("../page-objects/page/admin/datas-upload.page.js");
const AlertsPage = require("../page-objects/page/admin/alerts.page.js");
const EstablishmentsPage = require("../page-objects/page/admin/establishments.page.js");

//All the pages on the Managing main menu
const KPIPage = require("../page-objects/page/managing/kpi.page.js");
const RequestsManagementPage = require("../page-objects/page/managing/requests-management.page.js");
const QuotesManagementPage = require("../page-objects/page/managing/quotes-management.page.js");
const OrdersManagementPage = require("../page-objects/page/managing/orders-management.page.js");
const LicencesManagementPage = require("../page-objects/page/managing/licences-management.page.js");
const CatalogsPage = require("../page-objects/page/managing/catalogs.page.js");
const DocumentsPage = require("../page-objects/page/managing/documents.page.js");
const ManagingAlertsPage = require("../page-objects/page/managing/alerts.page.js");

const _function = require("../../utilities/common/functions.js");

const _portalData = require("../../resources/data/portals/portalSet.json");
//const env = require("../../resources/config/envConfig.json");

Then(
  /^User should see the Search field and Add button on Portal page$/,
  async () => {
    let searchExist = await _function.checkSearchFieldExist();
    await expect(searchExist).toEqual("search");
    let addBtnExist = await _function.checkAddButtonExist();
    await expect(addBtnExist).toEqual("Add");
  }
);

Then(/^User can search the name of a portal$/, async () => {
  await _function.inputKeywordToSearch(_portalData.portalAlpine2.portalName);
});

Then(
  /^User should the corrected portal is displayed as the result$/,
  async () => {
    let portalName = _portalData.portalAlpine2.portalName;
    let actualPortalName = await PortalsPage.getPortalName();
    await expect(actualPortalName).toEqual(`${portalName}`);
    await _function.getScreenshot("PortalSearchResult");
  }
);

When(/^User goes to the Parameters page$/, async () => {
  await ParametersPage.openParametersManagement();
});

Then(/^User should see Parameters page$/, async () => {
  let actualParamTitle = await ParametersPage.getParametersTitle();
  await expect(actualParamTitle).toEqual("Parameters");
  await _function.getScreenshot("ParametersPage");
});

Then(
  /^User should see the Contact and mailing information, Account parameters, Features sections on Parameters page$/,
  async () => {
    let actualContactAndMailingInformationsTitle =
      await ParametersPage.getContactAndMailingInformationsTitle();
    await expect(actualContactAndMailingInformationsTitle).toEqual(
      "Contact and mailing informations"
    );
    let actualAccountParamsTitle =
      await ParametersPage.getAccountParamatersTitle();
    await expect(actualAccountParamsTitle).toEqual("Account parameters");
    let actualFeaturesTitle = await ParametersPage.getFeatureTitle();
    await expect(actualFeaturesTitle).toEqual("Features");
    await _function.getScreenshot("ParametersDetails");
  }
);

When(/^User goes to the Actors management page$/, async () => {
  await ActorPage.openActorsManagement();
});

Then(/^User should see Actors management page$/, async () => {
  let getActorsManagementTitle = await ActorPage.getActorsManagementTitle();
  await expect(getActorsManagementTitle).toEqual("Actors management");
  await _function.getScreenshot("ActorsPage");
});

When(/^User goes to the Entities management page$/, async () => {
  await EntitiesPage.openEntitiesManagement();
});

Then(/^User should see Entities management page$/, async () => {
  let getEntitiesManagmentTitle = await EntitiesPage.getEntitiesTitle();
  await expect(getEntitiesManagmentTitle).toEqual("Entities management");
  await _function.getScreenshot("EntitiesPage");
});

When(/^User goes to the Request types management page$/, async () => {
  await RequestTypePage.openRequestTypesManagement();
});

Then(/^User should see Request types management page$/, async () => {
  let getRequestTypesManagementTitle =
    await RequestTypePage.getRequestTypesManagementTitle();
  await expect(getRequestTypesManagementTitle).toEqual(
    "Request types management"
  );
  await _function.getScreenshot("RequestTypesPage");
});

When(/^User goes to the Editors configuration page$/, async () => {
  await EditorConfigurationPage.openEditorConfiguration();
});

Then(/^User should see Editors configuration page$/, async () => {
  let getEditorConfigurationTitle =
    await EditorConfigurationPage.getEditorConfigurationTitle();
  await expect(getEditorConfigurationTitle).toEqual("Editor configuration");
  await _function.getScreenshot("EditorConfigurationPage");
});

When(/^User goes to the Subscription form page$/, async () => {
  await SubscriptionFormPage.openSubscriptionFormPage();
});

Then(/^User should see Subscription form page$/, async () => {
  let getSubscriptionFormPageTitle =
    await SubscriptionFormPage.getSubscriptionFormManagementTitle();
  await expect(getSubscriptionFormPageTitle).toEqual(
    "Subscription form management"
  );
  await _function.getScreenshot("SubscriptionFormPage");
});

When(/^User goes to the Datas upload page$/, async () => {
  await DatasUploadPage.openDatasUpload();
});

Then(/^User should see Datas upload page$/, async () => {
  let getDatasUploadTitle = await DatasUploadPage.getDatasUploadTitle();
  await expect(getDatasUploadTitle).toEqual("Datas upload");
  await _function.getScreenshot("DatasUploadPage");
});

When(/^User goes to the Alerts page$/, async () => {
  await AlertsPage.openAlertsPage();
});

Then(/^User should see Alerts page$/, async () => {
  let getAlertsTitle = await AlertsPage.getAlertsTitle();
  await expect(getAlertsTitle).toEqual("Alerts");
  await _function.getScreenshot("AdminAlertsPage");
});

When(/^User goes to the Establishments page$/, async () => {
  await EstablishmentsPage.openEstablishmentsPagePage();
});

Then(/^User should see Establishments page$/, async () => {
  let getEstablishmentsTitle =
    await EstablishmentsPage.getEstablishmentsPageTitle();
  await expect(getEstablishmentsTitle).toEqual("Establishments");
  await _function.getScreenshot("EstablishmentsPage");
});

When(/^User goes to the Managing menu$/, async () => {
  await _function.navigateToManagingMenu();
});

Then(/^User can able to access to KPI page$/, async () => {
  await KPIPage.openKPIPage();
});

Then(/^User should see should see KPI page$/, async () => {
  let getKPITitle = await KPIPage.getKPITitle();
  await expect(getKPITitle).toEqual("KPI");
  await _function.getScreenshot("KPIPage");
});

When(/^User goes to the Requests management page$/, async () => {
  await RequestsManagementPage.openRequestsManagementPage();
});

Then(/^User should see Requests management page$/, async () => {
  let getRequestsManagementTitle =
    await RequestsManagementPage.getRequestsManagementTitle();
  await expect(getRequestsManagementTitle).toEqual("Requests management");
  await _function.getScreenshot("RequestsManagementPage");
});

When(/^User goes to the Quotes management page$/, async () => {
  await QuotesManagementPage.openQuotesManagementPage();
});

Then(/^User should see Quotes management page$/, async () => {
  let getQuotesManagementTitle =
    await QuotesManagementPage.getQuotesManagementTitle();
  await expect(getQuotesManagementTitle).toEqual("Quotes management");
  await _function.getScreenshot("QuotesManagementPage");
});

When(/^User goes to the Orders management page$/, async () => {
  await OrdersManagementPage.openOrdersManagementPage();
});

Then(/^User should see Orders management page$/, async () => {
  let getOrdersManagementTitle =
    await OrdersManagementPage.getOrdersManagementTitle();
  await expect(getOrdersManagementTitle).toEqual("Orders management");
  await _function.getScreenshot("OrdersManagementPage");
});

When(/^User goes to the Licences management page$/, async () => {
  await LicencesManagementPage.openLicencesManagementPage();
});

Then(/^User should see Licences management page$/, async () => {
  let getLicencesManagementTitle =
    await LicencesManagementPage.getLicencesManagementTitle();
  await expect(getLicencesManagementTitle).toEqual("Licences management");
  await _function.getScreenshot("LicencesManagementPage");
});

When(/^User goes to the Catalogs page$/, async () => {
  await CatalogsPage.openCatalogsPage();
});

Then(/^User should see Catalogs page$/, async () => {
  let getCatalogsTitle = await CatalogsPage.getCatalogsTitle();
  await expect(getCatalogsTitle).toEqual("Catalogs");
  await _function.getScreenshot("CatalogsPage");
});

When(/^User goes to the Documents page$/, async () => {
  await DocumentsPage.openDocumentsPage();
});

Then(/^User should see Documents page$/, async () => {
  let getDocumentsTitle = await DocumentsPage.getDocumentsTitle();
  await expect(getDocumentsTitle).toEqual("Documents");
  await _function.getScreenshot("DocumentsPage");
});

When(/^User goes to the Alerts page in Managing$/, async () => {
  await ManagingAlertsPage.openAlertsPage();
});

Then(/^User should see Alerts page in Managing$/, async () => {
  let getAlertsTitle = await ManagingAlertsPage.getAlertsTitle();
  await expect(getAlertsTitle).toEqual("Alerts");
  await _function.getScreenshot("ManagingAlertsPage");
});
