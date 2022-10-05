class accountlocators {
    constructor() {
        this.ManageAccountBtn = 'a[data-original-title="Manage Address Book"]';
        this.addNewAddress = 'a[title="New Address"]';
        this.inputFirstName = '#AddressFrm_firstname';
        this.inputLastName = '#AddressFrm_lastname';
        this.inputCompany = '#AddressFrm_company';
        this.inputAddress1 = '#AddressFrm_address_1';
        this.inputCity = '#AddressFrm_city';
        
    }
}

export default class Account{
    constructor () {
        this.locators = new accountlocators();

    }
    getManageAccountBtn() {
        return cy.get(this.locators.ManageAccountBtn);

    }

    getAddNewAddress() {
        return cy.get(this.locators.ManageAccountBtn);


}
}
