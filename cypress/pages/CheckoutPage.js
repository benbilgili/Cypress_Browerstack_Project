class CheckoutPage {
    // Selectors
    firstNameField = "input#billing_first_name";
    lastNameField = "input#billing_last_name"
    streetAddressField = "input[name='billing_address_1']"
    townCityField = 'input#billing_city'
    postCodeField = 'input#billing_postcode'
    phoneNumberField = 'input#billing_phone'
    emailAddressField = 'input#billing_email'

    placeOrderButton = "button#place_order"
    

  
    // Actions
    completeCheckout(firstName, lastName, streetAddress, city, postCode, phoneNumber, emailAddress) {
        cy.get(this.firstNameField).clear().type(firstName);
        cy.get(this.lastNameField).clear().type(lastName);
        cy.get(this.streetAddressField).clear().type(streetAddress);
        cy.get(this.townCityField).clear().type(city);
        cy.get(this.postCodeField).clear().type(postCode);
        cy.get(this.phoneNumberField).clear().type(phoneNumber);
        cy.get(this.emailAddressField).clear().type(emailAddress);

        cy.get(this.placeOrderButton).click();
    }



  }
  
  module.exports = new CheckoutPage();