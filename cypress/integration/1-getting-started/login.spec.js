/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import Loginpage from "../pages/login.js";
import Data from "../../fixtures/usuarios.json";



describe('example to-do app', () => {
  beforeEach(() => {
        cy.visit('https://automationteststore.com');
  });

  it("login fail - Wrong User & Pass",() => {
    const header = new HeaderPage();
    const login = new Loginpage();

    header.getLoginRegisterButon().click();

    login.getUserInput().type('HolaMundo');
    login.getPassInput().type('HolaMundo');
    login.getLoginBtn().click();

    login
      .getAlertBox()
      .should ('contain.text', 'Error: Incorrect login or password provided.');
    
    
  });
it.only("Login OK" , () => {

    const header = new HeaderPage();
    const login = new Loginpage();

    header.getLoginRegisterButon().click();

    login.getUserInput().type(Data.users[0].user);
    login.getPassInput().type(Data.users[0].password);
    login.getLoginBtn().click();
});

});
