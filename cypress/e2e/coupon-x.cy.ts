
describe("Coupon-x tests", () => {
  it("Widget Test", () => {
    // login
    cy.visit("/wp-admin");
    cy.get("#user_login").type(Cypress.env('WP_ADMIN_USER'));
    cy.get("#user_pass").type(Cypress.env('WP_ADMIN_PASSWORD'));
    cy.get("#rememberme").check();
    cy.get("#wp-submit").click();
    cy.contains("Howdy, admin").should("be.visible");

    // // install plugin
    // cy.get('#menu-plugins').contains('a' , "Plugin").click();
    // cy.contains('a', 'Add New Plugin').click();
    // cy.get('#search-plugins').type('Coupon X Discount Pop Up');
    // cy.get('.plugin-card-coupon-x-discount-pop-up',{ timeout: 20000 }).should('be.visible');
    // cy.get('.plugin-card-coupon-x-discount-pop-up').contains('a', 'Install Now').click();
    // cy.get('.plugin-card-coupon-x-discount-pop-up').contains('a', 'Activate', {timeout: 20000}).should('be.visible').click();
    // cy.get('#toplevel_page_couponx').should('be.visible');

    // // skip newsletter
    // cy.get('.starts-testimonials-updates-form').should('be.visible');
    // cy.contains('a', 'No, I will do it later').click();

    // // create widget
    // cy.get('#toplevel_page_couponx').click();
    // cy.get('#toplevel_page_couponx').contains('a', 'Create New Widget').click();
    // cy.get('[placeholder="What\'s the your widget\'s name?"]').clear().type('Test Widget');
    // cy.get('#next-button').click();
    // cy.contains("Announcement Pop up - don't show a coupon code").parent().parent().find('.svg-icon').click();
    // cy.contains('Slide-in Pop up').parent().click();
    // cy.get('#next-button').click();
    // cy.get('#save-button').click();
    // cy.get('#wp_flash_message').should('contain.text', 'Settings saved (visit your  Dashboard for stats)');

    // // assert widget is visible
    // cy.visit('/');
    // cy.get('.tab-icon').should('be.visible');
  });

  after(() => {
    let status = (Cypress as any).mocha.getRunner().stats.failures > 0 ? "FAILED" : "PASSED";
    cy.task("writeTestStatus", status);
  });

});
