const url = "https://accesa-internship-portal.web.app/"

class Login {
    static visitPortal(){
        cy.visit(url)
    }

    static loadCredentials(){
        cy.login()
    }

    static checkLogin(){
        cy.get('h2').should('contain','Evaluations')
        cy.get('.nav-item.username').should('contain','Remus Gheorghita')
    }
}

export default Login