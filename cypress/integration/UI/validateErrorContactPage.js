describe("TestCases 1 & 2 for Contact page", () => {
  before(function () {
    cy.fixture("/UI Data/loginData").then(function (user) {
      globalThis.user = user;
      cy.goToContactPage();
    });
  });

  it("Validate errors on contact page - Negative Scenario", () => {
    cy.get("#forename-err").should("have.text", "Forename is required");
    cy.get("#email-err").should("have.text", "Email is required");
    cy.get("#message-err").should("have.text", "Message is required");
    cy.contains("complete the form correctly").should(
      "contain.text",
      "We welcome your feedback - but we won't get it unless you complete the form correctly."
    );
    cy.get("#forename").type(user.foreName);
    cy.get("#forename-err").should("not.exist", "Forename is required");
    cy.get("#email").type(user.email);
    cy.get("#email-err").should("not.exist", "Email is required");
    cy.get("#message").type("This is just the testing message");
    cy.get("#message-err").should("not.exist", "Message is required");
    cy.contains("complete the form correctly").should(
      "not.exist",
      "We welcome your feedback - but we won't get it unless you complete the form correctly."
    );
  });
});
