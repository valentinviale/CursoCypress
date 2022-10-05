/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import Loginpage from "../pages/login.js";
import Data from "../../fixtures/usuarios.json";
import Account from "../pages/account.js";



describe('example to-do app', () => {
  beforeEach(() => {
        cy.visit('https://automationteststore.com');
  
  });

  it("login fail - Wrong User & Pass",() => {
    const header = new HeaderPage();
    const login = new Loginpage();
    const account= new Account();

    header.getLoginRegisterButon().click();

    login.getUserInput().type('HolaMundo');
    login.getPassInput().type('HolaMundo');
    login.getLoginBtn().click();

    login
      .getAlertBox()
      .should ('contain.text', 'Error: Incorrect login or password provided.');
    
    
  });
it("Login OK" , () => {

    const header = new HeaderPage();
    const login = new Loginpage();

    header.getLoginRegisterButon().click();

    login.getUserInput().type(Data.users[0].user);
    login.getPassInput().type(Data.users[0].password);
    login.getLoginBtn().click();


});

it.only("Change adress" , () => {

  const header = new HeaderPage();
  const login = new Loginpage();

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[0].user);
  login.getPassInput().type(Data.users[0].password);
  login.getLoginBtn().click();

  cy.get('.nav-dash > :nth-child(9) > a').click();
  cy.get('.mb40 > .btn').click();



})});
