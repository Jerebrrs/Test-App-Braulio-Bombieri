describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/login", { failOnStatusCode: false });
  });

  it("Debería ocultar la contraseña por defecto", () => {
    cy.get("#normal_login_password").should("have.attr", "type", "password");
  });

  // Validaciones que deben ser tenidas en cuentas para mayor seguridad en la app de Braulio
  describe.skip("Validaciones de contraseña (Aún no implementadas)", () => {
    it("Debe exigir una longitud mínima de 6 caracteres", () => {
      cy.get("#normal_login_password").type("a").blur();
      cy.log("La validación de longitud mínima aún no está implementada.");
    });

    it("Debe rechazar una contraseña con más de 100 caracteres", () => {
      cy.get("#normal_login_password").type("a".repeat(101)).blur();
      cy.log("La validación de longitud máxima aún no está implementada.");
    });

    it("Debe rechazar contraseñas sin caracteres especiales, números o mayúsculas", () => {
      cy.get("#normal_login_password").type("abcdefg").blur();
      cy.log("La validación de contraseña segura aún no está implementada.");
    });

    it("No debe aceptar caracteres inválidos (!#$%^&*(), etc.)", () => {
      cy.get("#normal_login_password").type("password!@#").blur();
      cy.log("La validación de caracteres inválidos aún no está implementada.");
    });

    it("Debe exigir una contraseña segura", () => {
      cy.get("#normal_login_password").type("123456").blur();
      cy.log(
        "La validación de seguridad de contraseña aún no está implementada."
      );
    });
  });
});
