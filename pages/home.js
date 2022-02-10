module.exports = {
    // Actions
    async iShouldOpenTheApp() {
        await browser.goTo('#/');
    },

    async iSearchForProduct() {
        const idSelector = {
            selector: {
                id: 'searchField',
                viewName: 'sap.ui.demo.cart.view.Home',
            }
        };
        await browser.asControl(idSelector).setValue('Watch');
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
        await browser.asControl(textSelector).click();
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
        const idSelector = {
            selector: {
                id: 'container-cart---homeView--categoryList'
            }
        };

        const title = await browser.asControl(idSelector)?.getItems()[0]?.getTitle();

        expect(title).toBe('Flat Watch HD32');
    }
}