class MyAccountPage {
    // Selectors
    myOrdersLink = ".woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--orders > a";


  
    // Actions
    goToMyOrders() {
        cy.get(this.myOrdersLink).click();
    }

    



  }
  
  module.exports = new MyAccountPage();