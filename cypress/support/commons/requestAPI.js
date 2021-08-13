class requestAPI {
  requestForAPI(method, payLoad) {
    return cy.request({
      method: method,
      url: `${Cypress.env("URL")}appid=${Cypress.env("APP_ID")}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: payLoad,
    });
  }
}
export default requestAPI;
