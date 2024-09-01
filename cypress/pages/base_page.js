const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand()

// const sqlServer = require('cypress-sql-server');

// module.exports = (on, config) => {
//   tasks = sqlServer.loadDBPlugin(config.db);
//   on('task', tasks);
// }


export class BasePage {

    /**
     * set a delay
     * @param value - value of time to wait
     */
    // setDelay(value) {
    //     cy.wait(value);
    // }

    /**
     * get element
     * @param selector - WebElement
     */

    getElement(selector) {
        return cy.get(selector)
    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector) {
        return cy.get(selector, { timeout:10000 }).click({force:true}).waitForStableDOM();
    }

    /**
     * type and verify text
     * @param elementID - element of text
     * @param text - text to verify
     */
    typeAndVerifyText(elementID, text) {
        let element = cy.get(elementID);
        element.type(text);
        element.should("have.value", text);
    }
    /**
     * Click on a Specific Index of Element
     * @param element - element to verify
     * @param index - element to verify
     * @returns {boolean} true if exist else false
     */
    getElementByIndex(element, index) {
        return cy.get(element).eq(index).click();
    }
}
