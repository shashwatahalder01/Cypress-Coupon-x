// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Authenticate to WordPress with Basic Auth
       * @param {string} username - The WordPress username
       * @param {string} password - The WordPress password
       * @returns {string} - The Basic Auth string
       * @memberof Cypress.Chainable
       * @see https://on.cypress.io/custom-commands
       * @example
       * // this command
       * cy.basicAuth('admin', 'password')
       * // will return the Basic Auth string
       */
      basicAuth(username: string, password: string): string;

      /**
       * deactive a WordPress plugin by plugin name
       * @param {string} pluginName - The plugin name
       * @returns {Chainable<Element>}
       * @memberof Cypress.Chainable
       * @see https://on.cypress.io/custom-commands
       * @example
       * // this command
       * cy.deactivatePlugin('coupon-x')
       * // will deactivate the plugin with the name 'coupon-x'
       */
      deactivatePlugin: (pluginName: string) => Chainable<any>;

      /**
       * delete a WordPress plugin by plugin name
       * @param {string} pluginName - The plugin name
       * @returns {Chainable<Element>}
       * @memberof Cypress.Chainable
       * @see https://on.cypress.io/custom-commands
       * @example
       * // this command
       * cy.deletePlugin('coupon-x')
       * // will delete the plugin with the name 'coupon-x'
       */
      deletePlugin: (pluginName: string) => Chainable<any>;
    }
  }
}

// Basic Auth command
Cypress.Commands.add(
  "basicAuth",
  (username: string, password: string): string => {
    return "Basic " + btoa(username + ":" + password);
  }
);

Cypress.Commands.add("deactivatePlugin", (pluginName) => {
//   const username = Cypress.env("WP_ADMIN_USER");
//   const password = Cypress.env("WP_ADMIN_PASSWORD");
  const username = 'admin'
  const password = 'M9wzqolN4eiKRrzW4C'

  // Base64 encode the credentials for Basic Auth
  const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  cy.request({
    method: "PUT",
    url: "/wp-json/wp/v2/plugins/" + pluginName,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: {
      status: "inactive",
    },
    failOnStatusCode: false, // Optional: if you want to handle failures manually
  }).then((response) => {
    // You can add assertions here if needed
    expect(response.status).to.be.oneOf([200, 201]);
  });
});

Cypress.Commands.add("deletePlugin", (pluginName) => {
//   const username = Cypress.env("WP_ADMIN_USER");
//   const password = Cypress.env("WP_ADMIN_PASSWORD");
const username = 'admin'
  const password = 'M9wzqolN4eiKRrzW4C'

  // Base64 encode the credentials for Basic Auth
  const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  cy.request({
    method: "delete",
    url: "/wp-json/wp/v2/plugins/" + pluginName,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    failOnStatusCode: false, // Optional: if you want to handle failures manually
  }).then((response) => {
    // You can add assertions here if needed
    expect(response.status).to.be.oneOf([200, 201]);
  });
});
