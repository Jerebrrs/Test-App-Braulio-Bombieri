describe("Email validaciones", () => {
  beforeEach(() => {
    cy.visit("/login", { failOnStatusCode: false });
  });

  it("Correo electronico sin Dominio", () => {
    cy.get("#normal_login_email").type("usuario@.com");
    cy.get('[data-testid="ButtonSubmit"] > span').click();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  });

  it("Debe aceptar un email correcto", () => {
    cy.get("#normal_login_email").type("ejemplo@dominio.com");
    cy.get('[data-testid="ButtonSubmit"] > span').click();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  });

  it("No debe aceptar espacios en blanco al inicio o final del input", () => {
    cy.get("#normal_login_email").type("  ejemplo@dominio.com  ");
    cy.get('[data-testid="ButtonSubmit"] > span').click();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  });

  it("Debe rechazar un email sin @", () => {
    cy.get("#normal_login_email").type("ejemplodominio.com");
    cy.get('[data-testid="ButtonSubmit"] > span').click();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  });



  it("Debe rechazar un email de menos de 6 caracteres", () => {
    cy.get("#normal_login_email").type("a@b.co").blur();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error", { timeout: 5000 })
      .should("be.visible")
      .and("contain.text", "¡No es un correo electrónico válido!");
  });

  

  it("No debe aceptar un email sin dominio válido", () => {
    cy.get("#normal_login_email").type("ejemplo@com").blur(); 
    cy.get("#normal_login_email_help > .ant-form-item-explain-error", { timeout: 5000 })
      .should("be.visible")
      .and("contain.text", "¡No es un correo electrónico válido!");
  });
  
  it("No debe aceptar caracteres inválidos", () => {
    cy.get("#normal_login_email").type("ejemplo!@dominio.com").blur();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error", { timeout: 5000 })
      .should("be.visible")
      .and("contain.text", "¡No es un correo electrónico válido!");
  });
  
  it("Debe rechazar un email de más de 100 caracteres", () => {
    const longEmail = "a".repeat(87) + "@dominio.com"; // 100+ caracteres
    cy.get("#normal_login_email").type(longEmail).blur();
    cy.get("#normal_login_email_help > .ant-form-item-explain-error", { timeout: 5000 })
      .should("be.visible")
      .and("contain.text", "¡No es un correo electrónico válido!");
  });
  
});
