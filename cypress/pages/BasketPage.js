class BasketPage {
    // Selectors
    couponInput = "input#coupon_code";
    applyCouponButton = "button[name='apply_coupon']"
    itemsInBasket = ".product-name > a"

    removeCouponCodeButton = ".woocommerce-remove-coupon"
    proceedToCheckoutButton = ".alt.button.checkout-button.wc-forward"

  
    // Actions
    applyCoupon(couponCode) {
        cy.get(this.couponInput).clear().type(couponCode);
        cy.get(this.applyCouponButton).click();
    }

    verifyBasketTableContainsSearchTerm(itemName) {
        cy.get(this.itemsInBasket).contains(itemName).should('exist');
    }

    proceedToCheckout() {
        cy.get(this.proceedToCheckoutButton).click()
    }

  }
  
  module.exports = new BasketPage();