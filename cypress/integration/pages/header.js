class headerlocators {
    constructor() {
        this.LoginRegisterBtn = 'ul#customer_menu_top  a';

    }

}

export default class Header{
    constructor () {
        this.locators = new headerlocators();

    }
    getLoginRegisterButon() {
        return cy.get(this.locators.LoginRegisterBtn);


    }


}
