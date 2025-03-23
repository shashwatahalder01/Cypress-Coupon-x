# Coupon-X Discount Pop-Up Cypress Test Automation

This automation script uses Cypress to install and test the **Coupon-X Discount Pop-Up** plugin for WordPress. The script installs the plugin, creates a widget, and checks if the widget appears on the website. Upon completion, an email notification is sent to **contact+testqa5@premio.io**, reporting whether the test run passed or failed.

## Prerequisites

To run this automation test, you need the following:

- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **Cypress** - [Install Cypress](https://www.cypress.io/)
- **Nodemailer** - For sending email notifications after test completion.

## Getting Started

Follow these steps to set up and run the test automation:

### 1. Clone the Repository

Clone the repository to your local machine.

```
git clone https://github.com/shashwatahalder01/Cypress-Coupon-x.git
cd Cypress-Coupon-x
```

### 2. Install Dependencies

Install the required Node.js dependencies by running the following command:

```
npm install
```

This will install Cypress, Nodemailer, and other necessary dependencies.

### 3. Set Up Environment Variables

Create a file named .env in the root of your project and add variables based on .env.example

Also, Update baseUrl in cypress.config.ts

### 4. Create a test site

You can either create a local WordPress test site or use an online platform like TasteWP to quickly set up a test environment.

### 5. Run the Tests

Run the Tests 

```
npm run test
```

