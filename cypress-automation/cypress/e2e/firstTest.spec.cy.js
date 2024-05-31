// describe("My First Test", () => {
//   it("Visits the Cypress website", () => {
//     cy.visit("https://www.cypress.io");

//     cy.contains("Get Started").click();

//     cy.url().should("include", "/guides/overview/why-cypress");

//     cy.get(".markdown").should("be.visible");
//   });
// });

// cypress/integration/googleSearch.spec.js

describe("Google Search Automation", () => {
  it("Searches for a query on Google", () => {
    // Visit Google.com
    cy.visit("https://en.wikipedia.org/wiki/Artificial_intelligence");

    // // Accept cookies if the dialog appears
    // cy.get("body").then(($body) => {
    //   if ($body.find('div[role="dialog"]').length > 0) {
    //     cy.get("button").contains("I agree").click();
    //   }
    // });

    // Type a search query into the search bar
    // cy.get('input[value="Google Search"][aria-label="Google Search"]').type("Cypress.io{enter}");

    // Ensure that the results page contains the query in the title
    cy.title().should("include", "Artificial intelligence - Wikipedia");

    // Validate that the search results contain relevant links
    // cy.get("#search").should("be.visible");
    // cy.get("#search a").should("have.length.greaterThan", 0);

    // // Check the first result's link text
    // cy.get("#search a").first().should("contain.text", "cypress.io");
  });
});
require("cypress-xpath");
// describe("Automate ChatGPT Interaction", () => {
//   const email = "dkishorkumar7@gmail.com";
//   const password = "28July2000";

//   it("should log in and interact with ChatGPT", () => {
//     cy.visit("https://chat.openai.com/");
//     // cy.contains("Log in").click();
//     cy.wait(2000);
//     // cy.contains("Log in").should("be.visible").click();
//     // cy.contains("Log in", { timeout: 10000 }).should("be.visible").click();
//     // cy.xpath('//div[contains(text(), "Log in")]', { timeout: 10000 }).should("be.visible").click();
//     // cy.origin("https://auth0.openai.com", () => {
//     //   // Wait for the login form to be visible and enter credentials
//     //   cy.get('input[name="username"]').should("be.visible").type(email);
//     //   cy.get('input[name="password"]').should("be.visible").type(password);
//     //   cy.get('button[type="submit"]').should("be.visible").click();
//     // });
//     // cy.get('input[name="username"]').type(email);
//     // cy.get('input[name="password"]').type(password);
//     // cy.get('button[type="submit"]').click();
//     // cy.url().should("include", "/chat");
//     cy.contains("New chat").click();
//     cy.contains("ChatGPT can make mistakes. Check important info.").should("be.visible");
//     cy.get("textarea").type("Hi, How are you?");
//     cy.get("textarea").type("{enter}");
//     cy.get(".response-container", { timeout: 10000 }).should("be.visible");
//   });
// });

// /// <reference types="cypress" />

// // Add XPath support to Cypress
// require("cypress-xpath");

// describe("Automate ChatGPT Interaction", () => {
//   const baseUrl = "https://chat.openai.com";

//   it("should log in and interact with ChatGPT", () => {
//     cy.visit(baseUrl);

//     // cy.contains("Log in", { timeout: 10000 }).should("be.visible").click();
//     cy.xpath('//div[contains(text(), "Log in")]', { timeout: 10000 }).should("be.visible").click();

//     cy.origin("https://auth0.openai.com", () => {
//       cy.get('input[name="username"]').should("be.visible").type(Cypress.env("CHATGPT_EMAIL"));
//       cy.get('input[name="password"]').should("be.visible").type(Cypress.env("CHATGPT_PASSWORD"));
//       cy.get('button[type="submit"]').should("be.visible").click();
//     });

//     cy.origin(baseUrl, () => {
//       cy.get(".chat-header", { timeout: 10000 }).should("be.visible");

//       cy.contains("New chat", { timeout: 10000 }).should("be.visible").click();

//       cy.contains("ChatGPT can make mistakes. Check important info.", { timeout: 10000 }).should("be.visible");

//       cy.get(".chat-input textarea").should("be.visible").type("Hi, How are you?");

//       cy.get(".chat-input textarea").type("{enter}");

//       cy.get(".response-container", { timeout: 10000 }).should("be.visible");
//     });
//   });
// });

describe("Automate ChatGPT Interaction", () => {
  const baseUrl = "https://www.codesngears.com/";
  it("should log in and interact with ChatGPT", () => {
    // cy.viewport("iphone-x");
    // cy.viewport("ipad-2");
    // cy.viewport(320, 480);
    cy.viewport("samsung-note9");
    cy.visit(baseUrl);
    // headers: {
    //   "User-Agent",
    //     "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1";
    // }
    cy.get(".hamburger-icon", { timeout: 10000 }).should("be.visible").click();
    cy.xpath('//ul[@class = "side-navbar-links"]//a[contains (text(), "EVENTS")]').click();
    cy.get(".hamburger-icon", { timeout: 10000 }).should("be.visible").click();
    cy.xpath('//ul[@class = "side-navbar-links"]//a[contains (text(), "PARTICIPANTS")]').click();
    cy.contains("div", "CODE").should("be.visible").and("contain.text", "CODE").and("contain.text", "THON");
    cy.contains("div", "THINK").should("be.visible").and("contain.text", "THINK").and("contain.text", "THON");
    cy.get(".hamburger-icon", { timeout: 10000 }).should("be.visible").click();
    cy.xpath('//ul[@class = "side-navbar-links"]//a[contains (text(), "COMMITTEES")]').click();
    cy.xpath('//div[contains(@class, "individual-card")]//p[contains(text(), "Kishor kumar")]').scrollIntoView();
    cy.xpath('//div[contains (@class, "member-list-container")]//p[contains(text(), "Kishor kumar")]').scrollIntoView();
    cy.xpath('//div[contains(@class, "swiper-slide")]//div[contains(@class, "active-image")]//following::div[1]').should(
      "contain.text",
      "TECHNICAL COMMITTEE"
    );
    //test
    cy.get(".member-list-container").then(($container) => {
      // Check if the container has a vertical scrollbar
      const isScrollable = $container[0].scrollHeight > $container[0].clientHeight;
      expect(isScrollable).to.be.true;

      // Store the initial scroll position
      const initialScrollTop = $container.scrollTop();
      cy.wait(2000);
      // Scroll the container down
      $container.scrollTop(initialScrollTop + 1000);

      // Verify the container's scroll position has changed
      cy.wrap($container).should(($el) => {
        expect($el.scrollTop()).to.be.greaterThan(initialScrollTop);
      });
    });
    const browser = Cypress.browser;
    cy.window().then((win) => {
      const viewportWidth = win.innerWidth;
      const viewportHeight = win.innerHeight;
      if (viewportWidth >= 1280) {
        cy.get(".swiper-button-next").click();
      } else {
        cy.xpath(
          '//div[contains(@class, "swiper-slide")]//div[contains(@class, "active-image")]//following::div[contains(text(), "WEBSITE DEVELOPMENT")]'
        ).click();
      }
      // if (!cy.viewport("iphone-x")) cy.get(".swiper-button-next").click();
    });
  });
});

// describe("My Test Suite", function () {
//   before(() => {
//     // Code to run before all tests
//   });

//   beforeEach(() => {
//     // Code to run before each test
//     cy.visit("/login");
//   });

//   afterEach(() => {
//     // Code to run after each test
//   });

//   after(() => {
//     // Code to run after all tests
//   });

//   it("should log in with valid credentials", function () {
//     cy.get('input[name="username"]').type("myUsername");
//     cy.get('input[name="password"]').type("myPassword");
//     cy.get('button[type="submit"]').click();
//     cy.url().should("include", "/dashboard");
//   });

//   it("should show an error message for invalid credentials", function () {
//     cy.get('input[name="username"]').type("wrongUsername");
//     cy.get('input[name="password"]').type("wrongPassword");
//     cy.get('button[type="submit"]').click();
//     cy.get(".error-message").should("be.visible").and("contain", "Invalid credentials");
//   });
// });
