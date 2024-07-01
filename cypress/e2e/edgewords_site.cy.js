const NavBar = require("../pages/NavBar");
const LoginPage = require("../pages/LoginPage");
const ClothingItemPage = require("../pages/ClothingItemPage");
const BasketPage = require("../pages/BasketPage");
const CheckoutPage = require("../pages/CheckoutPage")
const MyAccountPage = require("../pages/MyAccountPage")


beforeEach(function () {
  cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
  NavBar.goPlace(NavBar.myAccountLink)
  NavBar.dismissCookie()
  LoginPage.login("ben.bilgili@2itesting.com", "DavidRaya15")
  LoginPage.verifyLogin("ben")

  NavBar.searchInSearchBar("cap")
  ClothingItemPage.addItemToBasket()
  NavBar.goPlace(NavBar.basketLink)
  BasketPage.verifyBasketTableContainsSearchTerm("Cap");

  NavBar.goPlace(NavBar.basketLink)
});


// 1
// The test will login to an e-commerce site as a registered user, purchase an item of clothing, apply a 
// discount code and check that the total is correct after the discount & shipping is applied. 
describe('Ecommerce', () => {

  it('Can login to Ecommerce, purchase an item of clothing using a discount code and verify that discount is correct', () => {
    BasketPage.applyCoupon("edgewords") // 15% discount

    // Apply discount code and verify that it takes 15% off total
    cy.get(".cart-subtotal > td > .amount.woocommerce-Price-amount > bdi").invoke('text').then((text) => {
      // regex to get just the number
        const cleanedAmount = text.replace(/[^0-9.]/g, '');
        const floatAmount = parseFloat(cleanedAmount);
        const fullPriceInPennies = Math.round(floatAmount * 100); 

        cy.get(".cart-discount.coupon-edgewords > td > .amount.woocommerce-Price-amount").invoke('text').then((text) => {
          const cleanedDiscountAmount = text.match(/-?£?(\d+(\.\d{1,2})?)/);
          const discountInPennies = cleanedDiscountAmount ? Math.round(parseFloat(cleanedDiscountAmount[1]) * 100) : null;
          let percentageDiscount = ((discountInPennies/fullPriceInPennies)*100)
          expect(percentageDiscount).to.equal(15)
        })
  })
  })
  it('Can login to Ecommerce, purchase an item of clothing and go through checkout. It will capture the order number and check that this is present in My Orders', () => {
      // click proceed to checkout
      cy.get('.alt.button.checkout-button.wc-forward').click();
    
      // enter billing details
      CheckoutPage.completeCheckout("Ben", "Bilgili", "46/2 The Paddockholm", "Edinburgh", "EH12 7XP", "07714589654", "ben.b@ben.com")

      // capture order number
      cy.get(".order > strong").invoke('text').then((text) => {
        cy.log("Text: " + text)
        const orderNumber = text;
        
        // click my account
        NavBar.goPlace(NavBar.myAccountLink)
        
        // click orders
        MyAccountPage.goToMyOrders();

        // verify that order number saved is there
        cy.get('td.woocommerce-orders-table__cell').find('a').first().should('contain', orderNumber)
        })
  })
})



    
