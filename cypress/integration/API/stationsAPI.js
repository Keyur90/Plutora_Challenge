import requestAPI from "../../support/commons/requestAPI";
const req = new requestAPI();

describe("Get the station details", () => {
  it("Validate status code of stations - GET API", () => {
    req.requestForAPI("GET").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).have.property("id", "6114b64a09e7430001b9f9f6");
      expect(response.body[0]).have.property(
        "name",
        "San Francisco Test Station"
      );
    });
  });

  it("Validate invalid URL of stations API- Negative Scenario 401", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("URL")}appid=`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it("Validate post station details - POST method", () => {
    cy.fixture("API Data/stationsData")
      .then((payLoad) => {
        req.requestForAPI("POST", payLoad);
      })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).have.property(
          "name",
          "San Francisco Test Station1"
        );
      });
  });
});
