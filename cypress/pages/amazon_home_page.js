
import {BasePage} from "./base_page";
// import sqlServer from 'cypress-sql-server';
// sqlServer.loadDBCommands();


class amazonHomePage extends BasePage{

    searchBar = 'input[id="twotabsearchtextbox"]';
    submitSearchButton = '#nav-search-submit-button';
    resultCardDescription = '[class*="a-size-base-plus a-color"]';
    productAddToCart = "#add-to-cart-button"
    navaddcart =  "#nav-cart";
    productCheckout = "#sc-buy-box-ptc-button .a-button-inner .a-button-input"
    getfirstProduct = () => 'div[class*="result-list"]>div[data-component-type*="search-result"]'
    getProductPrices = () => `${this.getfirstProduct()} span[class*="price-whole"]`; 
    getProductNames = () =>  `${this.getfirstProduct()} div[data-cy*="title-recipe"] h2[class*="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]`;
    getProductLinks = () => `${this.getProductNames()} a`;

    // Methods to get the first product's information
    firstProductNameSearchInfo() {
        return cy.get(this.getProductNames()).eq(0).invoke("text").then((productName) => {
            // cy.log('Search productName: ' + productName);
        });
    }

    firstProductPriceSearchInfo() {
        return cy.get(this.getProductPrices()).first().invoke("text").then((productPrice) => {
            // cy.log('Search productPrice: ' + productPrice);
        });
    }

    firstProductLinkSearchInfo() {
        return cy.get(this.getProductLinks()).first().invoke("attr", "href").then((productLink) => {
            // cy.log('Search productLink: ' + productLink);
        });
    }



    /**
     * Search any Product
     */
    initiateSearch(product)
    {
        // this.setDelay(4000)
        this.typeAndVerifyText(this.searchBar, product)
        this.getElementAndClick(this.submitSearchButton).waitForStableDOM()
    }

    /**
     * Load the First Card
     */
    loadFirstCardOnResultPage()
    {
        this.getElementByIndex(this.resultCardDescription, 0)
    }

    /**
     *  Navigate to Add to cart
    */
    naviagateANDaddToCart()
    {
        this.getElementAndClick(this.productAddToCart)
    }
    /**
     * Navigate to the Payment Gateway Screen
    */
    naviagateToProductBuy()
    {
        this.getElementAndClick(this.productCheckout)
    }

}
module.exports = new amazonHomePage();
