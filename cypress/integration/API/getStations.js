import stationsData from "../../fixtures/API Data/stationsData.json";
describe("Get the station details", () => {
  it("Validate station details - GET method", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("URL")}appid=${Cypress.env("APP_ID")}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).have.property("id", "6114b64a09e7430001b9f9f6");
      expect(response.body[0]).have.property(
        "name",
        "San Francisco Test Station"
      );
    });
  });

  it("Validate station details - GET method - Negative Scenario 401", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("URL")}appid=`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it("Validate post station details - POST method", () => {
    cy.fixture("API Data/stationsData").then((payLoad) => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("URL")}appid=${Cypress.env("APP_ID")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: payLoad,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).have.property(
          "name",
          "San Francisco Test Station"
        );
      });
    });
  });
});
