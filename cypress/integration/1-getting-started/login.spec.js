/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import Loginpage from "../pages/login.js";
import Data from "../../fixtures/usuarios.json";
import Account from "../pages/account.js";
import registerCypressGrep from "cypress-grep";
registerCypressGrep();

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
  });

  it(
    "login fail - Wrong User & Pass",
    { tags: ["@regression", "@smoke"] },
    () => {
      const header = new HeaderPage();
      const login = new Loginpage();
      const account = new Account();

      header.getLoginRegisterButon().click();

      login.getUserInput().type("HolaMundo");
      login.getPassInput().type("HolaMundo");
      login.getLoginBtn().click();

      login
        .getAlertBox()
        .should("contain.text", "Error: Incorrect login or password provided.");
    }
  );
  it.only("Login OK", () => {
    const header = new HeaderPage();
    const login = new Loginpage();
    if (Cypress.config("viewportWidth")<700){

      describe('test_name', function() {

        it('what_it_does', function() {
       
           cy.viewport(500, 588)
        
           cy.visit('https://automationteststore.com/')
        
           cy.get('.container-fluid > .col-md-12 > #categorymenu > .subnav > .form-control').click()
        
           cy.get('.container-fluid > .col-md-12 > #categorymenu > .subnav > .form-control').select('https://automationteststore.com/index.php?rt=account/login')
        
           cy.get('.container-fluid > .col-md-12 > #categorymenu > .subnav > .form-control').click()
        
           cy.visit('https://automationteststore.com/index.php?rt=account/login')
        
        })
       
       })
       
       
    }
    
    else{
    header.getLoginRegisterButon().click();

    login.getUserInput().type(Data.users[0].user);
    login.getPassInput().type(Data.users[0].password);
    login.getLoginBtn().click();
    cy.get('.side_account_list > :nth-child(10) > a').click();
    };
  });

  it("Change adress", () => {
    const header = new HeaderPage();
    const login = new Loginpage();
  });
  
});


//header.getLoginRegisterButon().click();

//login.getUserInput().type(Data.users[0].user);
//login.getPassInput().type(Data.users[0].password);
//login.getLoginBtn().click();

//cy.get(".nav-dash > :nth-child(9) > a").click();
//cy.get(".nav-dash > :nth-child(9) > a").matchImageSnapshot();
//cy.get(".mb40 > .btn").click();
