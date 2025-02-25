describe('Login Test',()=>{
    beforeEach(()=>{
        cy.visit('/login', { failOnStatusCode: false })
    })

    it('Debería mostrar un mensaje de error al ingresar credenciales incorrectas', () => {
        cy.get('#normal_login_email').type('usuario@incorrecto.com') 
        cy.get('#normal_login_password').type('Contraseña123!')
        cy.get('[data-testid="ButtonSubmit"] > span').click() 
    
        cy.get('.ant-alert-message')
        .should('be.visible')
        .and('contain', 'El correo electrónico o la contraseña son incorrectos')
      
      })
})