describe("TestCases 1 & 2 for Contact page", () => {
  beforeEach(function () {
    cy.fixture("/UI Data/loginData").then(function (user) {
      globalThis.user = user;
      cy.visit("/");
      cy.contains("Contact").click();
      cy.contains("Submit").click();
    });
  });

  it("Validate errors on contact page - Negative Scenario", () => {
    cy.validateErrors();
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

  it("Validate successful submission message - Positive Scenario", () => {
    cy.get("#forename").type(user.foreName);
    cy.get("#email").type(user.email);
    cy.get("#message").type("This is just the testing message");
    cy.contains("Submit").click();
    cy.contains("we appreciate your feedback.").should("be.visible");
  });
});
