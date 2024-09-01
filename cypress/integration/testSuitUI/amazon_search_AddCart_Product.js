const amazonHomePage = require("../../pages/amazon_home_page")

describe("Verify that user should be able to add items in the cart", function () {

  const searchQuery = "TitanWatch";
  let productDetails = {
    names: [],
    prices: [],
    links: []
  };


  beforeEach(function () {
    // Visit the base URL and login before each test
    cy.visit("/");
  });

  it("Verify Search for a specified product", function () {

    // Initialize an object to store product details with arrays
    amazonHomePage.initiateSearch(searchQuery);
  
    amazonHomePage.firstProductNameSearchInfo().then((productName) => {
      expect(productName).to.not.be.empty;
      cy.log('Verified Product Name: ' + productName);
      productDetails.names.push(productName);
    });
  
    amazonHomePage.firstProductPriceSearchInfo().then((productPrice) => {
      expect(productPrice).to.not.be.empty;
      cy.log('Verified Product Price: ' + productPrice);
      productDetails.prices.push(productPrice);
    });
  
    amazonHomePage.firstProductLinkSearchInfo().then((productLink) => {
      expect(productLink).to.not.be.empty;
      cy.log('Verified Product Link: ' + productLink);
      productDetails.links.push(productLink);
  
      // Write the product details to response.json
      cy.writeFile('cypress/fixtures/response.json', productDetails);
    });
  
  });
  

  it("Navigate to Add to Cart Screen:", function () {
    cy.visit("/");
    amazonHomePage.initiateSearch(searchQuery);
    amazonHomePage.loadFirstCardOnResultPage();
    amazonHomePage.naviagateANDaddToCart();
    amazonHomePage.naviagateToProductBuy();
  });

});

