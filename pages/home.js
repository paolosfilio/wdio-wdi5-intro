module.exports = {
    // Actions
    async iOpenTheApp() {
        await browser.goTo('#/');
    },

    async iSearchForProduct() {
        const idSelector = {
            selector: {
                id: 'searchField',
                viewName: 'sap.ui.demo.cart.view.Home',
            }
        };
        const searchFieldElement = await browser.asControl(idSelector);

        // Working with UI5 events can be tricky, e.g. the following line does not fire a 'search' event
        // await browser.asControl(idSelector).setValue('Watch');
        // But using native interactions (click/setValue) on Webdriver-level seem to work smoothly.
        // Unfortunately it seems that native interactions cannot be written fully in fluent API style:
        const webElement = await searchFieldElement.getWebElement();
        await webElement.$('input[type=search]').setValue('Watch');
    },

    async iSelectTheFirstProduct() {
        const textSelector = {
            selector: {
                controlType: 'sap.m.Text',
                properties: {
                    text: 'Flat Watch HD32'
                }
            }
        };

        // Working with UI5 events can be tricky, e.g. the following line does not fire a 'click' event
        // await browser.asControl(textSelector).click();
        // But using native interactions (click/setValue) on Webdriver-level seem to work smoothly.
        // Unfortunately it seems that native interactions cannot be written fully in fluent API style:
        const textElement = await browser.asControl(textSelector);
        const webElement = await textElement.getWebElement();
        await webElement.click();
    },

    // Assertions
    async iShouldSeeAllCategories() {
        const idSelector = {
            selector: {
                id: 'container-cart---homeView--categoryList'
            },
        };
        const listSize = await browser.asControl(idSelector)?.getItems(true)?.length;
        expect(listSize).toBe(16);
    },

    async theProductListShouldBeFiltered() {
        // The property 'timeout' is important, as the product list needs some milliseconds to update
        // Without setting a 'maximum waiting time (ms) before failing the search',
        // the element might not be available in the DOM when accessing it
        const idSelector = {
            timeout: 1000,
            selector: {
                id: 'container-cart---homeView--productList'
            }
        };
        const title = await browser.asControl(idSelector)?.getItems()[0]?.getTitle();

        expect(title).toBe('Flat Watch HD32');
    }
}