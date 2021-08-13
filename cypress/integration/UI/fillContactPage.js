describe("TestCases 1 & 2 for Contact page", () => {
  before(function () {
    cy.fixture("/UI Data/loginData").then(function (user) {
      globalThis.user = user;
      cy.goToContactPage();
    });
  });

  it("Validate successful submission message - Positive Scenario", () => {
    cy.get("#forename").type(user.foreName);
    cy.get("#email").type(user.email);
    cy.get("#message").type("This is just the testing message");
    cy.contains("Submit").click();
    cy.contains("we appreciate your feedback.").should("be.visible");
  });
});
